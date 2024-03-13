fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>isIndependent(data));


function isIndependent(ara){
  // let count = 1;
  for(const i of ara){
    (i)?console.log(0):console.log(`${i.name.common} is not Independent.`);
  }
}