"use strict"
//using function to add two numbers
console.log("Adding two numbers by using a fuction")
function add (num1, num2)
{
    return num1 + num2;
}
console.log("Sum: " + add(3,5));
console.log(add(2));//throws error because the value of number 2 is not provided

//using fucntion to add two numbers by already defining value to zero
console.log("Adding two numbers by declaring the value for num1 and num2 to zero")
function add1(num1=0, num2=0)
{
    return num1 + num2;
}
console.log(add1(5));//now it does not throw the error because the vale of num1 and num2 is already declared to zero

//using fucntion to  add two numbers assigning the function to the value
console.log("Using function to add two numbers by assigning it to a var")
var add2 = function(num1, num2)
{
    return num1 + num2;
}
console.log(add2(3,4));

//using fucntion to add two numbers by  using => operator 
console.log("Using => operator to add two numbers")
var add3 = (num1, num2) => num1 + num2;
console.log(add3(5,13));