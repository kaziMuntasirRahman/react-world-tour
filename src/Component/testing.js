fetch(`https://restcountries.com/v3.1/all`)
.then(res => res.json())
.then(res => console.log(res));