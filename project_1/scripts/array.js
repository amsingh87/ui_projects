var cart = [];
var cars = ['Lexus', 'Mercedes', 'Audi'];
var shoes = ['Nike', 'Addidas', 'Reebok'];
console.log(cars[2]);
cart.push(cars[1]);
console.log(cart[0]);
cart.pop();
cart.push(cars[0]);
console.log(cart[0]);


function parseArray(arrayParam)
{
    console.log("From function to display all the elements in the multiple array")
//iterating through the array using for 
for (var i=0; i<arrayParam.length; i++)
    console.log(arrayParam[i]);
}

parseArray(cars);
parseArray(shoes);

console.log("Using for each loop to display all the element in the array cars")
//iterating through the array using for each
cars.forEach(function (x)
{
    console.log(x);
});