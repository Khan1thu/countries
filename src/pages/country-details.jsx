import React from "react";
import { useParams } from "react-router-dom";
import country from "../rest-countries-api-with-color-theme-switcher-master/data.json";

export const CountryDetails = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello {name} </h1>
      {country.map((c) => {})}
      {console.log(name)}
      
    </div>
  );
};
