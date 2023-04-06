import { React, createContext, useState } from "react";
import "./App.css";
import { Country } from "./components/Country";
import { Filter } from "./components/Filter";
import { Nav } from "./components/nav";
import data from "./rest-countries-api-with-color-theme-switcher-master/data.json";

export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [filterTextValue, updateFilterText] = useState("");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const onFilterValueChanged = (filterValue) => {
    updateFilterText(filterValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav />
        <div className="sf">
          <div id={theme}>
            <input
              type="text"
              className="search"
              placeholder="Search for a country..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <Filter filterValueSelected={onFilterValueChanged} />
        </div>
        <div className="countries">
          {data
            .filter((c) => {
              if (filterTextValue == "Africa") {
                return c.region == "Africa";
              } else if (filterTextValue == "") {
                return c;
              } else if (filterTextValue == "America") {
                return c.region == "Americas";
              } else if (filterTextValue == "Asia") {
                return c.region == "Asia";
              } else if (filterTextValue == "Europe") {
                return c.region == "Europe";
              } else if (filterTextValue == "Oceania") {
                return c.region == "Oceania";
              }
            })
            .filter((c) => {
              if (search == "") {
                return c;
              } else if (c.name.toLowerCase().includes(search.toLowerCase())) {
                return c;
              }
            })
            .map((c) => {
              return <Country country={c} />;
            })}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
