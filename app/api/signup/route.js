import { dbConfig } from "@/config/dbConfig";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
    const hashPass = await bcrypt.hash(password, 10);

    await userModel.create({ name, email, password: hashPass });

    return NextResponse.json(
      { message: "POST Successfully working" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Something wrong in POST" });
  }
}