'use strict'

function calculations() {
    var num1 = " ";
    var num2 = " ";
    this.add;
    this.sub;
    this.mul;
    this.div;

    this.setnum1 = function (firstNum) {
        num1 = firstNum;
    }

    this.getnum1 = function () {
        return num1;
    }

    this.setnum2 = function (secondNum) {
        num2 = secondNum;
    }

    this.getnum2 = function () {
        return num2;
    }
}

var calcObj = new calculations;
calcObj.setnum1(15);
calcObj.setnum2(3);
var a = calcObj.getnum1();
var b = calcObj.getnum2();

var add = (firstNum, secondNum) => (firstNum + secondNum);
console.log("Sum: " + add(a, b));

var sub = (firstNum, secondNum) => (firstNum - secondNum);
console.log("Difference: " + sub(a, b));

var mul = (firstNum, secondNum) => (firstNum * secondNum);
console.log("Multiplication: " + mul(a, b));

var div = (firstNum, secondNum) => (firstNum / secondNum);
console.log("Division: " + div(a, b));