import ArrowRight from "@assets/ArrowRight";
import { useResize } from "@hooks/useResize";
import { Button, Chip } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const UniversitiesCard = ({ university }) => {
  const { isMobile } = useResize();
  return (
    <div
      key={university.id}
      className={`rounded-3xl shadow-2xl flex bg-white ${
        isMobile
          ? "p-5 py-6 flex-col justify-between gap-2"
          : "p-5 flex-row justify-between"
      }`}
    >
      <div className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-4"}`}>
        <img
          src={university.imageUrl}
          alt={university.name}
          className={` h-52 object-cover rounded-2xl ${
            isMobile ? "w-full" : "w-52"
          }`}
        />
        <div
          className={`text-left flex flex-col  ${isMobile ? "gap-2" : "gap-6"}`}
        >
          <div>
            <h4 className="text-xl	 text-black font-semibold	">
              {university.name}
            </h4>
            <p className="text-sm font-light text-grey-700">
              {university.address}
            </p>
            <p className="text-sm font-light text-grey-700">
              {university.languages}
            </p>
          </div>
          <div>
            <h4 className="text-sm		 text-black font-semibold	">
              {university.universityType}{" "}
            </h4>
            <p className="text-sm font-light  text-grey-700">
              Ranking QS: {university.rankingQS}
            </p>
            <p className="text-sm font-light text-grey-700">
              Ranking Shanghai: {university.rankingShanghai}
            </p>
            <p className="text-sm font-light text-grey-700">
              Becas: {university.scholarships}
            </p>
          </div>
          {/* <div className="flex gap-2 mt-2">
            {university.hotDeal && <span className="tag">#Hot deal</span>}
            {university.popular && <span className="tag">#Popular</span>}
          </div> */}
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-2 text-right">
            <div>
              <h1 className=" text-base	 text-green-100 font-bold">
                {"Excelente"}
              </h1>
              <h1 className="text-grey-200 text-xs	">
                {university.reviewCount} reseñas
              </h1>
            </div>
            <Chip
              label={university.reviewScore}
              sx={{
                color: "#009D52",
                backgroundColor: "#E1FFD7",
                fontSize: 14,
                // padding: 2,

                fontWeight: "400",
              }}
            />
          </div>
          {/* <span className="text-green-600 font-bold">
            {university.reviewScore}
          </span>
          <span className="text-gray-600">Excelente</span>
          <p className="text-gray-600">{university.reviewCount} reseñas</p> */}
        </div>
        <div className="text-right flex flex-col gap-1">
          <p className="text-base	text-black font-light font-semibold	">
            COP${(university.pricePerYear / 1e6).toFixed(1)} Millones / Año
          </p>
          <p className="text-sm font-light">{university.duration}</p>

          <NavLink to={`/university/${encodeURIComponent(university.name)}`}>
            <Button
              sx={{
                backgroundColor: "#381373",
                color: "white",
                borderRadius: 0,
                paddingInline: 5,
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
    </div>
  );
};

export default UniversitiesCard;
