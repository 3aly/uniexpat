import ArrowRight from "@assets/ArrowRight";
import { useResize } from "@hooks/useResize";
import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const UniversitiesCard = ({ university }) => {
  const { isMobile } = useResize();
  return (
    <div
      key={university.id}
      className={`rounded-3xl shadow-2xl flex bg-white ${
        isMobile ? "p-5 flex-col items-center" : "p-4 flex-row justify-between"
      }`}
    >
      <div className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-4"}`}>
        <img
          src={university.imageUrl}
          alt={university.name}
          className="w-52 h-52 object-cover rounded-2xl"
        />
        <div className="text-left">
          <h4 className="text-base text-black font-medium">
            {university.name}
          </h4>
          <p className="text-sm font-light">{university.address}</p>
          <p className="text-sm font-light">{university.languages}</p>
          <p className="text-sm font-light">{university.universityType}</p>
          <p className="text-sm font-light">
            Ranking QS: {university.rankingQS}
          </p>
          <p className="text-sm font-light">
            Ranking Shanghai: {university.rankingShanghai}
          </p>
          <p className="text-sm font-light">Becas: {university.scholarships}</p>
          <p className="text-sm font-light">
            COP${(university.pricePerYear / 1e6).toFixed(1)} Millones / Año
          </p>
          <p className="text-sm font-light">{university.duration}</p>
          <div className="flex gap-2 mt-2">
            {university.hotDeal && <span className="tag">#Hot deal</span>}
            {university.popular && <span className="tag">#Popular</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">
            {university.reviewScore}
          </span>
          <span className="text-gray-600">Excelente</span>
        </div>
        <p className="text-gray-600">{university.reviewCount} reseñas</p>
        <NavLink to={`/university/${encodeURIComponent(university.name)}`}>
          <Button
            sx={{
              backgroundColor: "#381373",
              color: "white",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#661ed89b", // Set the hover background color
              },
              marginTop: "auto",
            }}
            variant="contained"
          >
            Más información
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default UniversitiesCard;
