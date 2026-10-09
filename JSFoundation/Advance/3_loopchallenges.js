//loop walkthrough

/*

1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.



//solution:

let sum = 0;
let i = 1;

while (i <=5 ) {

    sum += i;
    i++;
}

*/

//console.log(sum);



/*

2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.



let i = 5;
let countdown = [];

while(i >= 1) {

    countdown.push(i);

    i--;
}

console.log(countdown);

*/

/*

3. write a `do while` loop that prompts a user to enter their favorite tea type until enter "stop"
store each tea type in an array named `teacollection`



let teacollection = [];
let tea;

do {
    tea = prompt(`Enter your fave tea(type "stop" to finish)`)

    if (tea !== "stop") {
        teacollection.push(tea)
    }
    
} while (tea !== "stop");

*/

/*

4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.



let total = 0;

let i = 1;

do {
    total += i;
    i++;
    
    
} while (i <= 3);

console.log(total);

*/

/*

5. Write a `for` loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named multipliedNumbers.



let arr = [2,4,6]
let multipliedNumbers = [];

let n = arr.length;

for(let i=0; i<n; i++){
    multipliedNumbers.push(arr[i]*2);
}
console.log(multipliedNumbers);

*/

/*

6. Write a `for` loop that lists all the cities in the array ["paris", "New York", "Tokyo", "London"] and stores each city in a new array named `cityList`.



let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

let n = cities.length;

for(let i=0; i<n; i++){
    cityList.push(cities[i]);
}
    
console.log(cityList);

*/

