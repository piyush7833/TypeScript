// const heroes=[]; //we should not do this in ts as it will create array of type never so nothing can be pushed in array
var heroes = []; //we should not do this in ts as it will create array of type empty array(never) so nothing  can be pushed 
// heroes.push("hanuman")
// heroes.push([]); 
var superHeroes = []; //this is okay as it means we can push arrays of string
superHeroes.push("hanuman");
superHeroes.push();
