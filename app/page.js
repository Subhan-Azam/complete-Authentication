import UserLogin from "./(components)/userLogin/UserLogin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/logout");
  }
  return (
    <>
      <UserLogin />
    </>
  );
}
