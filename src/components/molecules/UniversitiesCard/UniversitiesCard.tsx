import ArrowRight from "@assets/ArrowRight";
import { useResize } from "@hooks/useResize";
import { Button } from "@mui/material";
import React from "react";

const UniversitiesCard = ({ program }) => {
  const { isMobile } = useResize();
  return (
    <div
      key={program.id}
      className={` rounded-3xl shadow-2xl flex   ${
        isMobile ? "p-5  flex-col items-center" : "p-4 flex-row justify-between"
      }`}
    >
      <div
        className={`flex ${isMobile ? "flex-col gap-2" : " flex-row gap-2"}`}
      >
        <img
          src={program.imageUrl}
          alt="Program"
          className=" w-52 h-52 object-cover rounded-2xl"
        />
        <div className="text-left ">
          <h4 className="text-base text-black font-medium">{program.title}</h4>
          <p className="text-sm font-light">{program.description}</p>
        </div>
      </div>

      <div className=" self-end">
        <Button
          sx={{
            backgroundColor: "#381373",
            color: "white",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#661ed89b", // Set the hover background color
            },
          }}
          variant="contained"
        >
          Más información
        </Button>
      </div>
    </div>
  );
};

export default UniversitiesCard;
