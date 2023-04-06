import React, { useContext } from "react";
import "./styles/filter.css";
import { ThemeContext } from "../App";

export const Filter = (props) => {
  const filterOption = (event) => {
    props.filterValueSelected(event.target.value);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <select onChange={filterOption}>
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
