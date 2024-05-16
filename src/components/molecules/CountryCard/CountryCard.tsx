import React from "react";
import { Button } from "@mui/material";
import { IMAGES } from "@assets/images";
import { useResize } from "@hooks/useResize";
import { NavLink } from "react-router-dom";

const CountryCard = ({
  imageSrc = IMAGES.ai,
  title = "dasdsa",
  subtitle = "dadasd",
  reverse = false,
}) => {
  const { isMobile } = useResize();
  return (
    <div
      style={{ borderRadius: 16 }}
      className={`flex shadow-5xl   rounded-full	 justify-between  ${
        isMobile ? "flex-col" : reverse ? "flex-row-reverse" : "flex-row"
      } bg-white shadow-md rounded-lg overflow-hidden`}
    >
      <div className={`w-3/4 h-fit  ${isMobile ? "self-start" : "self-end"}`}>
        <img
          src={imageSrc}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className=" p-4 flex flex-col justify-between">
        <div>
          <p>como se vive en:</p>

          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <NavLink to={"/country"}>
          <Button
            className=" self-start "
            sx={{
              "&::before, &::after": {
                borderColor: "#ddac61",
                borderWidth: "1px",
              },
              backgroundColor: "#371373",
              color: "#fff",
              paddingInline: 2,
            }}
          >
            Entra
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
