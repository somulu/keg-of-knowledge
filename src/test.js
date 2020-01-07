const APIkey=e8afe73843413e14dc6a7218b469a279;

// Example Commands
fetch('https://sandbox-api.brewerydb.com/v2/breweries/?key=e8afe73843413e14dc6a7218b469a279')
.then(response => response.json())
.then(beers => {console.log(beers.data)});

fetch('https://sandbox-api.brewerydb.com/v2/beer/c4f2KE/?key=e8afe73843413e14dc6a7218b469a279')
.then(response => response.json())
.then(beers => {console.log(beers.data)});

fetch('https://sandbox-api.brewerydb.com/v2/breweries/?key=e8afe73843413e14dc6a7218b469a279')
.then(response => response.json())
.then(beers => {console.log(beers.data)});
