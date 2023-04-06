import "./styles/country.css";

export const Country = (props) => {
  const { flag, name, population, capital, region } = props.country;
  return (
    <div className="country">
      <img src={flag} />
      <div className="description">
        <h1>{name}</h1>

        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};
