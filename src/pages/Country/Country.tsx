import React from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";
import { useState } from "react";
import { CustomCardList, Map, Weather } from "@components/molecules";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink } from "react-router-dom";
import { IMAGES } from "@assets/images";
import {
  Banco,
  Clima,
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

const images = [
  {
    original: IMAGES.barca1,
    thumbnail: IMAGES.barca1,
  },
  {
    original: IMAGES.barca2,
    thumbnail: IMAGES.barca2,
  },
  {
    original: IMAGES.barca3,
    thumbnail: IMAGES.barca3,
  },
  {
    original: IMAGES.barca4,
    thumbnail: IMAGES.barca4,
  },
  {
    original: IMAGES.barca5,
    thumbnail: IMAGES.barca5,
  },
];
const tabLabels = [
  "Presupuesto",
  "Visa Estudiantes",
  "Empadronamiento",
  "NIE",
  "Salud",
  "Banco",
  "Clima",
  "Mapa",
];

const Country = () => {
  const [value, setValue] = useState(0);
  const visaEstudiantes = getVisaEstudiantes();
  const empadronamiento = getEmpadronamiento(); // Get the content
  const nie = getNIE(); // Get the content
  const salud = getSalud(); // Get the content
  const banco = getBanco(); // Get the content
  const presupuesto = getPresupuesto(); // Get the content
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
          items={images}
          renderItem={renderImageItem} // Pass the custom render function
          thumbnailPosition={`${isMobile ? "bottom" : "right"}`}
          showPlayButton={false}
        />
      </div>

      <div className="mt-4 mx-4">
        <h1 className="text-2xl	ms-4 font-bold mb-4">Barcelona</h1>
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
            <div>
              <Presupuesto content={presupuesto} />
            </div>
          )}
          {value === 1 && (
            <div>
              <VisaEstudiantes content={visaEstudiantes} />
            </div>
          )}
          {value === 2 && (
            <div>
              <div>
                <Empadronamiento content={empadronamiento} />
              </div>
            </div>
          )}
          {value === 3 && (
            <div>
              <div>
                <NIE content={nie} />
              </div>
            </div>
          )}
          {value === 4 && (
            <div>
              <Salud content={salud} />
            </div>
          )}
          {value === 5 && (
            <div>
              <Banco content={banco} />
            </div>
          )}
          {value === 6 && (
            <div>
              <Clima city="Barcelona" />
            </div>
          )}
          {value === 7 && (
            <div>
              <Map />
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
            m: 2,
            mb: 5,
          }}
        >
          Necesitas nuestra ayuda
        </Button>
      </NavLink>
    </div>
  );
};

export default Country;
