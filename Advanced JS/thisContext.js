const Person = {
    name: "Bubu",

    greet() {
        console.log(`Hi, I am ${this.name}`);
        
    },
};

Person.greet();

const greetFunction = Person.greet;
greetFunction();

const BoundGreet = Person.greet.bind({name: "Dudu" });
BoundGreet();

//theory :

/*

In JavaScript, call(), apply(), and bind() are used mainly to control what this refers to inside a function.

*/
