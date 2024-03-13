const countryContainer = {
  color: 'black',
  backgroundColor: 'lightgray',
  border: '5px solid tomato',
  padding: '10px',
  margin: '15px',
  borderRadius: '15px',
  minWidth: '600px',
  width: 'max-content'
}

const Country = ({country}) => {
  const {name, flags, population, area} = country;
  return (
    <div style={countryContainer} className="flex flex-col gap-2 font-semibold text-xl text-left">
      <h3>Country Name: {name.common}</h3>    
      <img src={flags.png} className="max-w-min max-h-40 my-4"/>
      <h3>Official Name: {name.official}</h3>        
      <h3>Population: {population}</h3>
      <h3>Area: {area} km<sup>2</sup></h3>
    </div>
  );
};

export default Country;