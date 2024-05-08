import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="block px-4 py-2 border rounded hover:bg-blue-500 hover:text-white"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
