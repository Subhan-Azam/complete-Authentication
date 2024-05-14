"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function UserSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(true);
  const [error, setError] = useState("");
  // const [loader, setLoader] = useState(false);

  const router = useRouter();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    // setLoader(true);

    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    const isValidEmail = validateEmail(email);
    setIsValid(isValidEmail);

    if (!isValidEmail) {
      setError("email is not valid");
      return;
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/signup", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setPassword("");
      alert("Data saved");
      router.push("/");
      // setLoader(false);
    }
  };

  return (
    <>
      {/* {loader && <Loader />} */}
      <div className="grid place-items-center h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-xl h-auto max-w-[400px] w-full p-7 border-t-4 bg-zinc-300/10 border-green-500">
          <h1 className="font-bold text-2xl">User SignUp</h1>
          <form className="flex flex-col gap-6 my-4">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="p-2 border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Full Name"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`p-2 border-2 rounded-lg ${
                isValid ? "border-gray-300" : "border-red-500"
              }`}
              type="email"
              placeholder="Email"
            />

            <div className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="outline-none w-full"
                type={visiblePass ? "password" : "text"}
                placeholder="Password"
              />
              <div
                className="cursor-pointer"
                onClick={() => setVisiblePass(!visiblePass)}
              >
                {visiblePass ? (
                  <FontAwesomeIcon className="text-sm px-2" icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon className="text-sm px-2" icon={faEye} />
                )}
              </div>
            </div>
            <button
              onClick={signUpHandler}
              className="py-2 text-lg font-semibold rounded-lg bg-green-500"
            >
              SignUp
            </button>

            {error && (
              <div className="bg-red-600 text-sm text-white w-fit rounded-lg px-4 py-1">
                {error}
              </div>
            )}

            <Link href="/">
              Already have an account? <span className="underline">LogIn</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
