// checking if the number is greater than another number:

/*
let num1 = 5;
let num2 = 8;

if (num1 > num2)

    {
        console.log("num1 is greater");
   
    }

    else{
        console.log("num2 is greater");
        
    }

*/


// checking if a string is equal to another string

/*
let username = "bubu";
let anotherusername = "dudu";

if (username == anotherusername)
{
    console.log("pick another name");
    
}

else{
    console.log("you can pick this username");
    
}
*/

//checking if a variable is a number or not:

//case1:

/*

let score = 44;

if (typeof score === "number")
{
    console.log("this is a number");
    
}
else{
    console.log("this is not a number");
    
}

*/

//case2:


/*

let score = "44";

if (typeof score === "number")
{
    console.log("this is a number");
    
}
else{
    console.log("this is not a number");
    
} //output is not a number,as the score is in string and "===" is used to check the variable data type

*/

//checking if a boolean value is true or false :

/*

let isMotuready = true;

if(isMotuready == true)
{
    console.log("motu is ready");
    
}
else{
    console.log("motu is not ready");
    
}

*/

//checking if array is empty or not:

let items = ["bubu"];

console.log(items.length);

if(items.length == 0)
{
    console.log("array is empty");
    
}
else{
    console.log("array is not empty");
    
}
