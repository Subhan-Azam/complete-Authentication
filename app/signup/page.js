import React from "react";
import UserSignUp from "../(components)/userSignUp/UserSignUp";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/logout");
  }
  return (
    <>
      <UserSignUp />
    </>
  );
}
