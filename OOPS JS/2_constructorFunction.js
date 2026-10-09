function Person(name, age){
    this.name = name
    this.age = age
}

function Car(maker, model){
    this.maker = maker
    this.model = model
}

//if we don't use "new" keyword the compilor will throw undefined so new is imp 

let MyCar = new Car("Maruti", "Baleno")
//console.log(MyCar);

let MyfutureCar = new Car("Range Rover", "Defender")
//console.log(MyfutureCar);

function Tea(type){
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`;
    };
}

let MasalaTea = new Tea("MasalaTea");
//console.log(MasalaTea);

//console.log(MasalaTea.describe());


//way to use prototype method on a constructor function (use case: used for prototype linking btw different files)

function Animal(species){
    this.species = species;
    }

    Animal.prototype.sound = function () {
        return `${this.species} makes a bad sound `;
    };

    let dog = new Animal("dog");

    //console.log(dog);
    
    //console.log(dog.sound());
    





