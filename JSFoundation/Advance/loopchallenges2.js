//levelup challenges on loop

/*
1. Write a `for` loop that loops through the array ["green tea", "black tea", "chai", "ooleng tea"] and stops the loop when it finds "chai".
store all teas before "chai" in a new array named `SelectedTeas`.


solution 1 :

let arr = ["green tea", "black tea", "chai", "ooleng tea"];
let SelectedTeas = [];

let n = arr.length;

for(let i=0; i < (n-2) ; i++)

{
    SelectedTeas.push(arr[i]);
}

console.log(SelectedTeas);

solution 2: Good practice

let arr = ["green tea", "black tea", "chai", "ooleng tea"];
let SelectedTeas = [];

for(let i=0; i < arr.length; i++)
{
 if (arr[i] === "chai"){
   break;
 }
SelectedTeas.push(arr[i])
}
console.log(SelectedTeas);

*/

/*

2. Write a `for` loop that loops through the array ["london", "New York", "Paris", "Berlin"]
and skips "paris".
store the other cities in a new array named `visitedCities`.

solution:


let cities = ["london", "New York", "Paris", "Berlin"];
let visitedCities = [];

let n = cities.length

for(i=0; i<n; i++){
if (cities[i] === "Paris") {
    continue;
    
}

    visitedCities.push(cities[i]);
}
console.log(visitedCities);

*/

/*

3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found.

Store the numbers before `4` in an array named `smallNumbers`.


solution:


let arr = [1,2,3,4,5];
let smallNumbers =[];

for (const num of arr) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num);
    
}
console.log(smallNumbers);

*/

/*

4. Use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip " herbal tea".

store the other teas in a array named "prefferedTeas"


solution:


let teas = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedTeas = [];

for (const tea of teas) {

    if (tea === "herbal tea") {
        continue;
        
    }
    prefferedTeas.push(tea)
    
}
console.log(prefferedTeas);

*/

/*

5. Use a `for-in` loop to loop through an object containing city populations.

stop the loop when the population of :"berlin" is found and store all the previous cities populations in a new object named 'cityNewPopulations'.

let citiespopulation = {
"london": 8900000,
"new york": 8400000,
"paris": 2200000,
"berlin": 3500000
};



solution :


let citiespopulation = {
"london": 8900000,
"new york": 8400000,
"paris": 2200000,
"berlin": 3500000
};

let cityNewPopulations = {};

for (const city in citiespopulation) {
    //key = value
    if (city == "berlin") {
        break;
        
    }

    cityNewPopulations[city] = citiespopulation[city];
    
    
    //console.log(citiespopulation[city]);
     
}
console.log(cityNewPopulations);

*/

/*

6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

*/

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.


let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.


let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

*/

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.


let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}
*/


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.


let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}

*/