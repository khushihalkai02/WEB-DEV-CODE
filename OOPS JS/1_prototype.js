//Theory 

//this is the old menthod

/*
let computer = {
    cpu : 4,
    RAM : 14,   
};
let lenovo = {
    screen : "HD",
    __proto__: computer,

};
let hardware = {};

console.log(`lenovo`, lenovo.__proto__);

*/

//this is a new method.

//This mechanism is called prototypal inheritance

let genericcar = {
    tyres: 4,
    door: 6
};

let tesla = {
    driver: "AI"
};

Object.setPrototypeOf(tesla, genericcar);

//Object.setPrototypeOf(tesla, genericcar) creates a prototype link.

console.log(`tesla`, Object.getPrototypeOf(tesla));

//Object.getPrototypeOf(tesla) returns the prototype object that has been inherited.


/*

//hasownproperty - the property gives boolean value wether the property is inherited or its own.



console.log(tesla.hasOwnProperty('tyres'));
//expected output = false;

*/







