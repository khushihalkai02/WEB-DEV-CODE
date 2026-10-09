//Different ways to Print

console.log("hello"); //output will not be in the same line : hello
console.log("chai");  //output will not be in the same line : chai

process.stdout.write("chai"); //output will be in same line : chaicoffee
process.stdout.write("coffee"); //output will be in same line : chaicoffee

console.table([{ city: "muzaffarpur"}, { city: "Gulbarga"}]);
// used for making tables with contents.

console.warn({city: "Jaipur"});
// warn helpings in printing with colors