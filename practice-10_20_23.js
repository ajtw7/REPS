const allCities = ['Miami', 'Philadelphia', 'New York', 'Wilmington', 'Washington D.C.', 'Baltimore', 'Los Angeles', 'Chicago']

console.log(allCities)

let firstThreeCities = allCities.slice(0, 3)
console.log(firstThreeCities)

let test = allCities.splice(0, 7, 'Vancouver', 'Toronto', {cityName: "Brooklyn", millionPop: "true"})
console.log(test)
console.log(allCities[2].cityName)



let Brooklyn = {
    cityName: 'Brooklyn',
    cityState: 'New York',
    population: 3.5,
    publicTrans: true,
    cityPresident: "Mike Michaels",
    county: 'Kings',
    Neighboorhoods: ['Bushwick', 'Crown Heights', 'Williamsburg', 'East New York', 'Bay Ridge', 'Sunset Park', 'BedStuy', 'Dumbo']

}

console.log(Brooklyn)
console.log(Brooklyn.Neighboorhoods.unshift('Flatbush'))
console.log(Brooklyn.Neighboorhoods)


favHood = Brooklyn.Neighboorhoods.map(elem => {
    
    return `My favorite neighboorhood in Brooklyn is ${elem}`;

})

console.log(favHood)