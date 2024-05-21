import React from "react";
import { Tabs, Tab, Box, Button, Chip } from "@mui/material";
import { useState } from "react";
import { CustomCardList, Map, Weather } from "@components/molecules";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink, useParams } from "react-router-dom";
import { IMAGES } from "@assets/images";
import {
  Admission,
  Banco,
  Becas,
  Clima,
  Descripción,
  Empadronamiento,
  NIE,
  Presupuesto,
  Salud,
  VisaEstudiantes,
} from "@components/organisms";
import { getVisaEstudiantes } from "@utils/getVisaEstudiantes";
import { getEmpadronamiento } from "@utils/getEmpadronamiento";
import { getNIE } from "@utils/getNIE";
import { getSalud } from "@utils/getSalud";
import { getBanco } from "@utils/getBanco";
import { useResize } from "@hooks/useResize";
import { getPresupuesto } from "@utils/getPresupuesto";
import { getUniversity } from "@utils/getUniversity";

const tabLabels = ["Descripción", "Proceso de Admisiones", "Becas"];

const University = () => {
  const { name } = useParams();

  const [value, setValue] = useState(0);

  const university = getUniversity(name); // Get the content
  const { isMobile } = useResize();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderImageItem = (item) => {
    return (
      <div className="flex items-center justify-center ">
        <img
          src={item.original}
          alt={item.originalAlt}
          style={{ height: isMobile ? "250px" : "400px", width: "auto" }} // Set your desired height
        />
      </div>
    );
  };

  return (
    <div className=" mt-1 flex flex-col flex-1 justify-center ">
      <div className={` ${isMobile ? "w-full" : "w-1/2"}`}>
        <ImageGallery
          items={university.images}
          renderItem={renderImageItem} // Pass the custom render function
          thumbnailPosition={`${isMobile ? "bottom" : "right"}`}
          showPlayButton={false}
        />
      </div>

      <div className="mt-4 mx-4">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl	ms-4 font-bold mb-4">{name}</h1>
            <p className="text-sm	ms-4 text-black-200  mb-4">
              {university.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <h1 className=" text-xs text-green-100 font-bold">
                {university.rating.name}
              </h1>
              <h1 className="text-grey-200 text-xs	">
                {university.rating.review}
              </h1>
            </div>
            <Chip
              label={university.rating.num}
              sx={{
                color: "#009D52",
                backgroundColor: "#E1FFD7",
                fontSize: 14,
                fontWeight: "600",
              }}
            />
          </div>
        </div>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="country details tabs"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} />
            ))}
          </Tabs>
        </Box>
        <div className="mt-4 ">
          {value === 0 && (
            <div className="mx-4 ">
              <Descripción content={university.Descripción} />
            </div>
          )}
          {value === 1 && (
            <div>
              <Admission content={university.Admission} />
            </div>
          )}
          {value === 2 && (
            <div className="mx-4 ">
              <Becas content={university.Becas} />
            </div>
          )}
        </div>
      </div>
      <NavLink to={"/services"}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            bgcolor: "#ff3030a2",
            "&:hover": {
              bgcolor: "#e63e3e", // Change to your desired hover color
            },
            m: 4,
            mb: 5,
          }}
        >
          Necesitas nuestra ayuda
        </Button>
      </NavLink>
    </div>
  );
};

export default University;
