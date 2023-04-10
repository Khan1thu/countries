import { Link } from "react-router-dom";
import "./styles/country.css";
import data from "../rest-countries-api-with-color-theme-switcher-master/data.json";

export const Country = (props) => {
  for (let i = 0; i < data; i++) {}
  const { flag, name, population, capital, region } = props.country;
  const number = props.id;
  return (
    <div className="country">
      <img src={flag} />
      <div className="description">
        <Link to={`/country/${number}`}>
          <h1>
            {" "}
            <span>
              {number} {name}
            </span>
          </h1>
        </Link>

        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};
