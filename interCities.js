interCities = [
  {
    name: "Instabul",
    country: "Turkey",
  },
  {
    name: "Sao Paolo",
    country: "Brazil",
  },
];

console.log(interCities);

interCities.push({ name: "Singapore", country: "Singapore" });

let cityObj = interCities.map((city) => {
  return `My Home is ${city.name}!`;
});

console.log(cityObj);

interCities.push({ name: "Rome", country: "Italy", continent: "Europe" });
console.log(interCities[0].continent);

function fillBlank() {
  interCities.map((city) => {
    if (city.continent === undefined) {
      return (city.continent = "");
    }
  });
}

fillBlank();

console.log(interCities);


interCities.push({name: 'Toyko', country: 'Japan'})
console.log(interCities)

fillBlank()
console.log(interCities)

interCities[0].continent='Asia'
console.log(interCities[0])


