import React, { useState, useEffect } from "react";

import axios from "axios";

import Header from "./Components/ui/header";
import Country from "./Components/country/country";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/all`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />

      <h1 className="center"> Country Bio </h1>

      <Country isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
