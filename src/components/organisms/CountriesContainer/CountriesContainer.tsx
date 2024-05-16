import React from "react";
import { Button } from "@mui/material";
import { CountryCard } from "@components/molecules";

const CountriesContainer = ({ content }) => {
  return (
    <div className={`flex flex-col p-4 gap-5 overflow-hidden`}>
      {content.map((country) => {
        return (
          <>
            <CountryCard
              imageSrc={country.image}
              title={country.title}
              subtitle={country.subtitle}
              reverse={country.reverse}
            />
          </>
        );
      })}
    </div>
  );
};

export default CountriesContainer;
