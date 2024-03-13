import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
// import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <>
      <h3>Number of Countries info is: {countries.length}</h3>
      <div className="grid grid-cols-3">
      {
        countries.map(country => <Country key={country.cca3} country={country}></Country>)
      }
      </div>
    </>
  );
};

export default Countries;