"use client";
import React, { useState } from "react";
import UserLogOut from "../userLogout/UserLogOut";

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="absolute right-0 mt-2 w-screen md:w-80 lg:w-80 rounded-md shadow-xl  ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <UserLogOut />
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";
// import React, { useState } from "react";
// import UserLogOut from "../userLogout/UserLogOut";

// export default function ProfileModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={openModal}
//         className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       >
//         <span>+</span>
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <UserLogOut />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
