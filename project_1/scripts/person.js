'use strict';

function Person() {
    var firstName = " ";
    var lastName = " ";
    var address = " ";
    var dob = " ";
    var gender = " ";
    var country = " ";
    var cars = [];



    this.setfirstName = function (fname) {
        firstName = fname;
    }

    this.getfirstName = function () {
        return firstName;
    }

    this.setlastName = function (lname) {
        lastName = lname;
    }

    this.getlastName = function () {
        return lastName;
    }

    this.setaddress = function (addrs) {
        address = addrs;
    }

    this.getaddress = function () {
        return address;
    }

    this.setdob = function (dateofbirth) {
        dob = dateofbirth;
    }

    this.getdob = function () {
        return dob;
    }

    this.setgender = function (gnd) {
        gender = gnd;
    }

    this.getgender = function () {
        return gender;
    }

    this.setcountry = function (cty) {
        country = cty;
    }

    this.getcountry = function () {
        return country;
    }

    this.setcars = function (car) {
        cars = car;
    }

    this.getcars = function () {
        return cars;
    }

    this.checkData = function () {
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Address: " + address);
        console.log("Date of Birth: " + dob);
        console.log("Gender: " + gender);
        console.log("Country: " + country);
        if (cars.length > 0) {
            console.log("Cars list");
            cars.forEach(function (x) {
                console.log(x);
            })
        }

    }
}
//end of person function
var personArray = [];

function submit() {
    var pObj = new Person();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    pObj.setfirstName(firstName);
    pObj.setlastName(lastName);
    pObj.setaddress(address);
    pObj.setdob(dob);
    //pObj.checkData();
    personArray.push(pObj);
    //checkArray(personArray);
}

function generateTable(sample) {
    var template = "";
    var i = 1;
    sample.forEach(function (x) {
        template += "ITEM" + i + "<br>";
        template += "FIRST NAME " + x.getfirstName() + "<br>";
        template += "LAST NAME " + x.getlastName() + "<br>";
        template += "<hr>";
        i++;
    });
    return template;
}

function display() {
    var result = generateTable(personArray);
    document.getElementById("results").innerHTML = result;
}

var carsArray = ["Audi", "Lexus"];
var pObj = new Person();
pObj.setfirstName('John');
pObj.setlastName('Drew');
pObj.setaddress('Irving Texas');
pObj.setdob('06/13/1987');
pObj.setgender('Male');
pObj.setcountry('USA');
pObj.setcars(carsArray);
pObj.checkData();

personArray.push(pObj);
//console.log(personArray[0]);
//personArray[0].checkData();

var pObj = new Person();
pObj.setfirstName('Adam');
pObj.setlastName('Duds');
pObj.setaddress('Dallas Texas');
pObj.setdob('07/13/1986');
pObj.setgender('Male');
pObj.setcountry('Nepal');
pObj.setcars(carsArray);

console.log("New value");
//pObj.checkData();
personArray.push(pObj);
//console.log(personArray[0]);
//printing the whole list in personArray using for each loop
personArray.forEach(function (x) {
        x.checkData();
    })
    //printing the list by its index number
personArray[0].checkData();
personArray[1].checkData();