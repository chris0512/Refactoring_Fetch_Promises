const checkStatusAndParse = (response) => {
	if(!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets');
	for(let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const get10MorePlanets = (url) => {
	return fetch(url);
};


fetch('https://swapi.dev/api/planets/')
.then(checkStatusAndParse)
.then(printPlanets)
.then(get10MorePlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then(get10MorePlanets)
.catch((err) => {
	console.log('something went wrong with fetch');
})