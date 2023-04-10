import React from "react";
import { useParams } from "react-router-dom";
import country from "../rest-countries-api-with-color-theme-switcher-master/data.json";
import { Link } from "react-router-dom";
import "../components/styles/country-details.css";

export const CountryDetails = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="wrapper">
        <Link to={"/"}>
          <button>Back</button>
        </Link>
        <div className="details">
          <div>
            <img src={country[id].flag} className="flag" />
          </div>
          <div className="desc">
            <div className="country-name">
              <h1>{country[id].name}</h1>
            </div>
            <div className="details-country">
              <div>
                <p>Native Name: {country[id].nativeName}</p>
                <p>Population: {country[id].population}</p>
                <p>Region: {country[id].region}</p>
                <p>Sub Region: {country[id].subregion}</p>
                <p>Capital: {country[id].capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {country[id].topLevelDomain}</p>
                <p>Currencies: {country[id].currencies.name}</p>
                <p>Languages: {country[id].languages.name}</p>
              </div>
            </div>
            <div className="border">
              <p>Border Countries: {country[id].borders}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
