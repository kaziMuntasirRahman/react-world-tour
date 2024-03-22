import './country.css'

const Country = ({ country }) => {
  const { name, independent, flags } = country;
  return (
    <div className='country'>
      <h2>Name: {name.common}</h2>
      <h3>Language: {independent ? "Independent" : "Not Independent"}</h3>
      <img src={flags.png} style={{ maxHeight: '250px' }} />
    </div>
  );
};

export default Country;