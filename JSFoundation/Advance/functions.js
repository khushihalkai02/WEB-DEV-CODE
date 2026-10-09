//challenges on function

/*

1. Write a function named `makeTea` that takes one parameter, `typeofTea`, and returns a string like "Making green tea" when called with "green tea".
Store the result in a variable named `teaOrder`.



//solution

function makeTea (typeofTea) {
    return `Making ${typeofTea}`;
    
}
    let teaOrder = makeTea("green tea");
    console.log(teaOrder);
    
*/

/*

2. Create a fuction named `orderTea` that takes one parameter, `TeaType`. Inside this function, create another function named `confirmOrder` that returns a message like "Order confirmed for chai".

call `confirmOrder` from within `orderTea` and return the result.



function orderTea(TeaType) {

    function confirmOrder () 
    {
        return `Order confirmed for ${TeaType}`;
    }
      return confirmOrder();
}
    
let teas = orderTea("chai");
console.log(teas);

*/

/*

3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying their `price` and `quantity`.

store the result in a variable named `totalCost`.



const calculateTotal = (price, quantity) => {
    return price * quantity;
} 

let totalCost = calculateTotal(21, 2);

console.log(totalCost);

*/

/*

4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument "earl grey".

Return the result of calling `makeTea`.



function makeTea(teastypes){
    return `make tea: ${teastypes}`;

}

function processTeaOrder(makeTea){
    return makeTea("earl grey");

}

let order = processTeaOrder(makeTea);
console.log(order);

*/

/*

5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and returned function in a variable named `teaMaker` and call it with "green tea".

*/



function createTeaMaker(){
    return function (teatypess) {
        return `Making ${teatypess}`;  
    };

}

let teaMakers = createTeaMaker();
let result = teaMakers("green tea");
console.log(result);



    
    
