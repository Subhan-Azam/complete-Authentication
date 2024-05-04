import { dbConfig } from "@/config/dbConfig";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import crypto from "crypto";
import moment from "moment";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

dbConfig();
export const POST = async (req) => {
  try {
    const body = await req.json();
    const userEmail = body.email;
    console.log("body", body);
    console.log("userEmail", userEmail);

    if (!userEmail) {
      throw new Error("Enter a valid Email");
    }

    const compareMailWithDB = await userModel.findOne({ email: userEmail });
    console.log("compareMail With DB", compareMailWithDB);

    const resetToken = crypto.randomBytes(10).toString("hex");
    const resetTokenExpiration = moment().add(1, "hour").toDate();

    compareMailWithDB.reset_token = resetToken;
    compareMailWithDB.reset_token_expiration = resetTokenExpiration;
    await compareMailWithDB.save();

    console.log("resetToken", resetToken);
    console.log("resetTokenExpiration", resetTokenExpiration);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("transporter result", transporter);

    const resetLink = `${process.env.NEXTAUTH_URL}/resetpassword/?token=${resetToken}`;
    console.log("resetLink", resetLink);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Rest Password",
      html: `Please click <a href=${resetLink} >here</a> to reset your password`,
    };

    console.log("mailOptions", mailOptions);

    const sendMail = await transporter.sendMail(mailOptions);
    console.log("sendMail", sendMail);

    return NextResponse.json({ message: "Forget Post working" });
  } catch (error) {
    return NextResponse.json({ message: "Something error" });
  }
};

// =====================================================

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const newPassword = body.password;
    const reset_token = body.token;
    console.log("body", body);
    console.log('=====================================')
    console.log("newPassword", newPassword);
    console.log("reset_token", reset_token);

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log('=====================================')
    console.log("hashedPassword", hashedPassword);

    const userFound = await userModel.findOne({
      reset_token,
      reset_token_expiration: { $gt: Date.now() },
    });

    console.log("userFound", userFound);

    let changePassword = await userModel.updateOne(
      { reset_token },
      {
        $set: {
          password: hashedPassword,
          reset_token: "",
          reset_token_expiration: "",
        },
      }
    );

    console.log("changePassword", changePassword);

    return NextResponse.json({ message: "PUT Update working" });
  } catch (error) {
    return NextResponse.json({ message: "Something error in PUT" });
  }
};
