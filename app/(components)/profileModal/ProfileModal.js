"use client";
import React, { useState } from "react";
import UserLogOut from "../userLogout/UserLogOut";

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span>+</span>
      </button>

      {isOpen && (
        <div className="absolute -right-4 lg:absolute lg:right-0  bg-white mt-3 w-screen md:w-80 lg:w-80 rounded-md shadow-xl ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <UserLogOut />
          </div>
        </div>
      )}
    </div>
  );
}

