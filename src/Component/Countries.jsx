import { useState, useEffect } from "react";
import Country from "./Country";
import './country.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => setCountries(res));
  },[]);

  return (
    <div className="countries">
      {
        countries.map(country =>(
          <Country key={country.ccn3} country={country}/>
        ))
      }    
    </div>
  );
};

export default Countries;