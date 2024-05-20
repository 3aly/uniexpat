import React from "react";
import PropTypes from "prop-types";
import { IMAGES } from "@assets/images";
import { useResize } from "@hooks/useResize";

const CustomCardList = ({ table }) => {
  const { isMobile } = useResize();

  return (
    <div
      className={` bg-white shadow-2xl rounded-lg flex flex-col flex-1 ${
        isMobile ? "p-3" : "p-3"
      }`}
    >
      <div className="flex items-center mb-6 self-center">
        <img
          src={table.header.image}
          alt="Header"
          className={` object-cover mr-4 ${
            isMobile ? "h-10 w-12" : "h-20 w-23"
          }`}
        />
        <span className="font-extrabold	 text-lg text-purple-200">
          {table.header.title}
        </span>
      </div>
      <div className="space-y-4 flex flex-col flex-1 text-left gap-2">
        {table.rows.map((row, index) => (
          <div
            key={index}
            className={`flex flex-row items-center  text-left justify-between bg-gray-100  rounded-lg shadow-sm   ${
              isMobile ? "p-2 " : "p-2 gap-4"
            }`}
          >
            <img
              src={IMAGES.cash}
              alt={row.name}
              className={` object-cover  ${
                isMobile ? "h-15 w-12 mr-2" : "mr-4 h-12 w-23"
              }`}
            />
            <div className="text-left flex-1">
              <p
                className={`text-gray-700  	font-light ${
                  isMobile ? "text-xs mx-1" : "text-base"
                }	`}
              >
                {row.title}
              </p>
            </div>

            <p className={`font-medium	${isMobile ? "text-md	" : "text-2xl	"}`}>
              {row.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCardList;
