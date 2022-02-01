
//get, parse and return the information from MBTA
async function getBusLocations() { //use an async function so we can use fetch
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip"; //url that points to the data WHERE TF DOES THIS COME FROM
  const response = await fetch(url); //store the data in a variable called response
  const json     = await response.json(); //wait for json data to be extracted and store it in a variable called json
  return json.data //return the json data to the calling function
}

//pull getbuslocation
async function run(){
  const locations = await getBusLocations(); //store the current bus locations
  console.log(new Date());
  console.log(locations);


  //timer
  setTimeout(run, 15000);
}

run();