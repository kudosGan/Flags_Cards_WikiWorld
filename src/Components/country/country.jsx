import React from "react";

import CountryItem from "./countryitem";

const Country = ({ items, isLoading }) => {
  return isLoading ? (
    <h1> Loading ...</h1>
  ) : (
    <section className="cards">
      {items.map(item => (
        <CountryItem key={item.name} item={item} />
      ))}
    </section>
  );
};
export default Country;
