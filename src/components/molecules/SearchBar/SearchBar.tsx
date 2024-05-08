import React from "react";

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="my-4  flex flex-row  justify-center w-full gap-x-6 ">
      <input
        type="text"
        placeholder="Buscar programas..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-full flex-1"
      />
      <button className=" bg-purple-200 text-white py-2 px-4 md:me-2 md:mb-0 mb-2">
        ¿QUE QUIERES ESTUDIAR?
      </button>
    </div>
  );
};

export default SearchBar;
