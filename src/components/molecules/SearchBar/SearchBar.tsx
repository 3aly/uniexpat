import { useResize } from "@hooks/useResize";
import React from "react";

const SearchBar = ({ onSearchChange }) => {
  const { isMobile } = useResize();

  return (
    <div
      className={` w-full flex flex-row  justify-center  ${
        isMobile ? " my-2  gap-x-1 " : "my-4   gap-x-6"
      } `}
    >
      <input
        type="text"
        placeholder="Buscar programas..."
        onChange={(e) => onSearchChange(e.target.value)}
        className={` border border-gray-300 rounded-full ${
          isMobile ? "w-full" : "p-2  flex-1"
        }`}
        style={{
          fontSize: isMobile ? "12px" : "14px",
          /* adjust as needed */ paddingLeft: "10px",
        }}
      />
      <button
        style={{
          fontSize: isMobile ? "0.5rem" : "14px",
        }}
        className={` bg-purple-200 text-white ${
          isMobile ? " w-1/4 p-1" : " py-2 px-4 mb-2 "
        }`}
      >
        ¿QUE QUIERES ESTUDIAR?
      </button>
    </div>
  );
};

export default SearchBar;
