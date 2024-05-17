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
      className={`flex shadow-5xl items-center   rounded-full	 justify-between  ${
        isMobile ? "flex-col" : reverse ? "flex-row-reverse" : "flex-row"
      } bg-white shadow-md rounded-lg overflow-hidden`}
    >
      <div className={` h-fit  ${isMobile ? "self-start" : "self-end w-2/4"}`}>
        <img src={imageSrc} alt={title} className="object-cover " />
      </div>
      <div className=" p-4 flex flex-col justify-between gap-20 ">
        <div>
          <p className={"text-xs	font-bold	text-grey-600 "}>como se vive en:</p>

          <h2 className="text-4xl	 font-extrabold	text-black-200">{title}</h2>
          <p className="text-black-200 text-base	">{subtitle}</p>
        </div>
        <NavLink to={"/country"}>
          <Button
            sx={{
              backgroundColor: "#371373",
              // py: isMobile ? 1 : 2,
              "&:hover": {
                backgroundColor: "#5d0fdb", // Set the hover background color
              },
            }}
            variant="contained"
          >
            Entra
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
