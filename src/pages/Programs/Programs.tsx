import React, { useState, useEffect } from "react";
import faker from "faker";

import Pagination from "./Pagination";
import { ProgramCard, SearchBox } from "@components/molecules";
import { Filters } from "@components/organisms";

const generateData = () => {
  return [...Array(50)].map(() => ({
    id: faker.datatype.uuid(),
    image: faker.image.abstract(400, 300, true),
    title: faker.company.catchPhrase(),
    description: faker.lorem.sentences(2),
  }));
};

const Programs = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const newData = generateData();
    setData(newData);
    setFilteredData(newData);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = data.filter((program) =>
      program.title.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  // Paginate data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <SearchBox handleSearch={handleSearch} />
      <Filters setData={setFilteredData} data={data} />
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default Programs;
