"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");

  const token = searchParams.get("token");

  async function changepass(e) {
    e.preventDefault();
    await axios
      .put("http://localhost:3000/api/forgetpassword", { password, token })
      .then((result) => {
        console.log(result.data);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <>
      <form onSubmit={changepass}>
        <label htmlFor=""> Type your new password </label>
        <input
          type="text"
          name="name"
          id=""
          placeholder="type your new password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </>
  );
}
