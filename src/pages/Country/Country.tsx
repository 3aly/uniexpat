// src/CountryDetailsPage.js
import React from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";
import { useState } from "react";
import { Map } from "@components/molecules";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink } from "react-router-dom";
import { IMAGES } from "@assets/images";
import {
  Banco,
  Empadronamiento,
  NIE,
  Salud,
  VisaEstudiantes,
} from "@components/organisms";
import { getVisaEstudiantes } from "@utils/getVisaEstudiantes";
import { getEmpadronamiento } from "@utils/getEmpadronamiento";
import { getNIE } from "@utils/getNIE";
import { getSalud } from "@utils/getSalud";
import { getBanco } from "@utils/getBanco";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderImageItem = (item) => {
    return (
      <div className="flex items-center justify-center">
        <img
          src={item.original}
          alt={item.originalAlt}
          style={{ height: "400px", width: "auto" }} // Set your desired height
        />
      </div>
    );
  };
  return (
    <div className="container mx-auto mt-8 ">
      <div style={{ height: "40%", flex: 0.2 }}>
        <ImageGallery
          items={images}
          renderItem={renderImageItem} // Pass the custom render function
          thumbnailPosition="right"
          showPlayButton={false}
        />
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Barcelona</h1>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="country details tabs"
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} />
            ))}
          </Tabs>
        </Box>
        <div className="mt-4">
          {value === 0 && <div>Content for {tabLabels[0]}</div>}
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
          {value === 6 && <div>Content for {tabLabels[6]}</div>}
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
          }}
        >
          Necesitas nuestra ayuda
        </Button>
      </NavLink>
    </div>
  );
};

export default Country;
