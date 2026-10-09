/*
1. Declare an array named `teaflovors` that contains the strings "green tea", "black tea", and "oolang tea".

Access the first element of the array and store it in a variable named `firstTea`.

//answer :


let teaflavours = ["green tea", "black tea", "oolang tea"];

let firsttea = teaflavours[0];

console.log(firsttea);

*/

/*

2. Declare an array named `cities` contaoning "london", "tokyo", "paris", and "new york".

Access the third element in the array and store it in a variable named favecity.

//answer:



let cities = ["London", "Tokyo", "Paris", "New York"];

let favecity = cities[2];

console.log(favecity);

*/

/*

3. you have an array `tea types` containing "herbal tea", "white tea", "masala tea"

change the second element of the array to "jasmine tea"



let teatypes = ["Herbal tea", "White tea", "Masala tea"];

let newtea = "jasmine tea";

teatypes[1] = newtea;

console.log(teatypes);

*/

/*

4. Declare an array named `citiesVisited` containing "mumbai", "sydney".

add "Berlin" to the array using the push method.



let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

console.log(citiesVisited);

*/

/*

5. you have an array named `teaorders` with "chai", "iced tea", "matcha", and "earl grey".

Remove the last element of the array using the pop method and store it in a variable named 
`lastorder`.



let teaorders = ["chai", "iced tea", "matcha", "earl grey"];



let lastorder = teaorders.pop("earl grey");

console.log(lastorder);
console.log(teaorders);

*/

/*

6. you have an array named `popularTeas` xontaining "green tea", "oolang tea", and "chai"

create a soft copy of this array named `softcopyTeas`



let PopularTeas = ["Green tea", "Oolang tea", "Chai"];
let softcopyTeas = PopularTeas;
PopularTeas.pop();
console.log(softcopyTeas);
console.log(PopularTeas);

*/

/*
7. you have an array named `topcities` containing "berlin", "Singapore", and "new york".

create a hard copy of this array named `hardcopycities`



let topcities = ["Berlin", "Singapore", "New York"];

let hardcopycities = [...topcities];

topcities.pop()

console.log(hardcopycities);
console.log(topcities);

*/

/*

8. you have two arrays: `europeancities` containing "paris", "rome" and `asiancities` containing  "tokyo" and "bangkok"

Merge these two arrays into a new array named `worldcities`



let euporeancities = ["Paris", "Rome"];
let asiancities = ["tokyo", "Bangkok"];

let worldcities = [...euporeancities, ...asiancities];

//we can also use concat

console.log(worldcities);

*/

/*
9. you have an array named `teaMenu` containing "masala chai", "oolang tea", "green tea", and "earl grey"

find the length of the array and store it in a variable named `Menulength`.



let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];

let Menulength = teaMenu.length;

console.log(Menulength);

*/

/*

10. you have an array named `citybucketlist` containing "koyto", "london", "cape town", and "vancouver"

check if "london" is in a array and store the result in a variable named `isLondonInList`.



let citybucketlist = ["kotyo", "London", "Cape Town", "Vancouver"];

let isLondonInList = citybucketlist.includes("London");

console.log(isLondonInList);

*/



