import React from "react";

const CountryItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.flag} alt="" />
          <h1 className="center">{item.name}</h1>
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Country Name:</strong> {item.name}
            </li>
            <li>
              <strong>Capital:</strong> {item.capital}
            </li>
            <li>
              <strong>Region:</strong> {item.region}
            </li>
            <li>
              <strong>Time Zone:</strong> {item.timezones}
            </li>
            <li>
              <strong>Code:</strong> {item.callingCodes}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
