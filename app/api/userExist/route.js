// import { dbConfig } from "@/config/dbConfig";
// import userModel from "@/models/userModel";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await dbConfig();
//     const body = await req.json();
//     const { email } = body;
//     const user = await userModel.findOne({ email }).select("_id");
//     console.log("user", user);
//     return NextResponse.json({ message: "user Exist working" });
//   } catch (error) {
//     return NextResponse.json({ message: "There are some errors" });
//   }
// }
