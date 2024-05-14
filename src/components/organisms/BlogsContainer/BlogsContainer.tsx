import React from "react";
import { NavLink } from "react-router-dom";
import { useResize } from "@hooks/useResize"; // Adjust this import according to your project structure

const BlogsContainer = ({ content }) => {
  const { isMobile } = useResize();

  return (
    <div
      className={`flex text-start ${
        isMobile
          ? "flex-col m-2 gap-y-6 items-center"
          : "flex-row m-8 justify-between"
      }`}
    >
      {content.map((item) => (
        <NavLink to={`/blogs`} key={item.id}>
          <div
            className={`rounded-lg shadow-2xl p-4 text-start flex flex-col justify-center items-start ${
              isMobile ? "items-center m-2" : "mx-8"
            }`}
          >
            <div className="flex flex-col relative self-center w-full">
              <div className="text-xs absolute m-3 px-3 py-2 rounded-full bg-orange-100 text-orange-500">
                <p>{item.category}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`rounded-3xl ${isMobile ? "w-full" : ""}`}
                style={{ maxHeight: "50%", objectFit: "cover" }}
              />
            </div>
            <div className="flex gap-2 flex-col mx-2 mt-2 text-grey-300 w-full">
              <h3>{item.author}</h3>
              <h2
                className={`text-2xl font-bold ${
                  isMobile ? "text-lg" : "mt-5 text-2xl"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`font-medium ${
                  isMobile ? "text-sm mt-2" : "mt-5 text-xl"
                } line-clamp-3`}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default BlogsContainer;
