import { useResize } from "@hooks/useResize";
import React from "react";

const EmailInputWithButton = () => {
  const { isMobile } = useResize();

  return (
    <div
      className={`flex flex-col    rounded-xl	${
        isMobile ? "" : "w-full justify-center items-center "
      } `}
    >
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Enter your email address"
          className={`pl-3 pr-20  border-1 border-[#21338e] rounded-xl w-full ${
            isMobile ? "p-2 text-xs" : "py-5"
          }`}
          style={{ borderRadius: "16px" }}
        />
        <button
          className={`absolute inset-y-0 my-1 me-1 right-0 bg-purple-200 text-white  items-center text-xs rounded-xl ${
            isMobile ? "py-1 px-2" : "py-2 px-4"
          }`}
        >
          Book a Meeting
        </button>
      </div>
    </div>
  );
};

export default EmailInputWithButton;
