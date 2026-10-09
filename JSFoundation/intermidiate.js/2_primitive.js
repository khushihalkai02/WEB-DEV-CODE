//Number

let balance = 102;

//if I want to just print the output I'll use the log but if I want to check the datatype of the variable I'll have to use "typeof()"

//for example:

let balance1 = 102;
let balance2 = new Number(120);  
//new Number() creates a Number object, w   which can behave differently.


console.log(typeof(balance1));

console.log(balance2.valueOf());  
 //valueOf() → “Give me the actual value inside this object.”

console.log(typeof(balance2));

//Boolean 

let isActive = true
let isReallyActive = new Boolean(true) //not recommended

//null and undefined

let firstname;
console.log(firstname);  
// as firstname is declared but value is not assigned then the value will be undefined

let rollno = null;               //value declared as Null
let classroom = undefined;
console.log(rollno);
console.log(classroom);

//String

let greet = "hello";
let anothergreet = 'hola';
let username = "bubu";


let oldmethod = greet + " " + "Dudu"; //this is a long method instread use bactics
console.log(oldmethod);

let newmethod = `Hello ${username}!`; //easy to inject variables as well as additional subjects

console.log(newmethod);


//Symbol

//symbol is a unique attribute as it gets created in a new memory, so even when you assign same value yet sm1 will not be equal to sm2

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2); //false - as it always creates a unique attribute 







