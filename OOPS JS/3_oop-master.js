//OOP- 4 PILLARS {inheritence, polymorphism, absraction, encapsulation}

/*

INHERITANCE EXAMPLE :

*/

class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;

    }
}

class Car extends Vehicle{
      constructor(make,model,color, fuel){

        super(make,model);
        this.color = color;
        this.fuel = fuel;
      }

    drive(){
        return `${this.make}: this is an inheritance example`

    }
     
}

let myCar = new Car("Rolls Royce", "phantom", "2040", "black");
//console.log(myCar);
//console.log(myCar.drive());
//console.log(myCar.start());


//Encapsulation : is a simple concept of restricting direct access to data objects

class BankAccount{
    #balance = 0;

    Deposit (amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `₹ ${this.#balance}`;
    }

    withdraw (amount){
        this.#balance -= amount;
        return this.#balance;
    }
}

let account = new BankAccount();
//account.Deposit(10000);
//account.withdraw(1000);
//console.log(account.getBalance());

//Abstraction : hiding internal implementation details and exposing only essentails features

class CoffeeMachine {

    start(){
        return `machine has started`
    }

    brewing (){
        return `brewing your coffee`
    }

    pressStartButton (){
        let msg1 = this.start();
        let msg2 = this.brewing();

        return `${msg1} + ${msg2}`
    }
}

let myMachine = new CoffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewing());
//console.log(myMachine.pressStartButton());


//Polymorphism : the ability to have or to be displayed in more than one form (a single function, method, or object can behave differently depending on the context or data it receives)

class Bird{
    fly (){
        return `Flying....`
    }
}

class Penguin extends Bird {
    fly(){
        return `Pengiun cant fly...`
    }
}

let bird = new Bird ();
let pengiun = new Penguin();
//console.log(bird.fly());
//console.log(pengiun.fly());

//static method 

class Calculator {

 static add (a,b){
 return a+b;

    }

}

//let miniCalc = new Calculator();  //-> Will throw error as static keyword won't be executed with any object. 
//console.log(miniCalc.add(2,3));


//console.log(Calculator.add(2,3));


//getters and setters

class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    // Getter
    get salary() {
        return this.#salary;
    }

    // Setter
    set salary(value) {
        if (value < 0) {
            console.log("Invalid salary");
        } else {
            this.#salary = value;
        }
    }
}

let emp = new Employee("Dudu", 50000);

console.log(emp.salary);  // 50000

emp.salary = 60000;       // Setter is called
console.log(emp.salary);  // 60000

emp.salary = -5000;       // Invalid salary














