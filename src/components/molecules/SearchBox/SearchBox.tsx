import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for programs..."
        onChange={handleSearch}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBox;
