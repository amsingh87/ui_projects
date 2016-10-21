'use strict';
//same as $(document).ready(function(){});
$(function () {
    $("#dob").datepicker();
    $("#tabs").tabs();
    $("#submit").click(submit);
    $("#display").click(display);
    // $("#display").on("click", display);
    $("#test").on("click", function () {
        $("$submit").trigger("click");
        $("$display").trigger("click");
    });
});



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
    var carsArray = [];
    /* var gender = "";
     var genderName = document.getElementsByName("gender");

     for (var i = 0; i < genderName.length; i++) {
         if (genderName[i].checked) {
             gender = genderName[i].value;
         }
     }*/
    //jquery variable declaration
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var address = $("#address").val();
    var dob = $("#dob").val();
    var country = $("#country").val();
    var gender = $("#gender:checked").val();
    var car = document.getElementsByName("car");
    for (var i = 0; i < car.length; i++) {
        if (car[i].checked) {
            carsArray.push(car[i].value);
        }
    }

    //console.log(carsArray);

    //java script variable declaration
    /*  var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var address = document.getElementById("address").value;
      var dob = document.getElementById("dob").value;
      var country = document.getElementById("country").value;*/
    /*if (document.getElementByMame("genderMale").checked = true) {
        gender = document.getElementById("genderMale").value;

    } else if (document.getElementById("genderFemale").checked = true) {
        gender = document.getElementById("genderFemale").value

    }*/

    pObj.setfirstName(firstName);
    pObj.setlastName(lastName);
    pObj.setaddress(address);
    pObj.setdob(dob);
    pObj.setcountry(country);
    pObj.setgender(gender);
    pObj.setcars(carsArray);
    //pObj.checkData();
    personArray.push(pObj);
    //checkArray(personArray);
    display();
}

function generateTable(sample) {
    var template = "";
    var i = 1;
    template += "<div class='accordion'>";
    sample.forEach(function (x) {
        // template += "PERSON " + i + "<br>";

        template += "<h3>" + x.getlastName() + "," + x.getfirstName() + "</h3>";
        template += "<div>";
        template += "FIRST NAME: " + x.getfirstName() + "<br>";
        template += "LAST NAME: " + x.getlastName() + "<br>";
        template += "ADDRESS: " + x.getaddress() + "<br>";
        template += "DATE OF BIRTH: " + x.getdob() + "<br>";
        template += "COUNTRY: " + x.getcountry() + "<br>";
        template += "GENDER: " + x.getgender() + "<br>";
        template += "CARS: " + x.getcars() + "<br>";
        template += "<hr>";
        i++;
    });
    template += "</div>";
    return template;
}

function display() {
    var result = generateTable(personArray);
    //  result = "Hello World";
    // document.getElementById("results").innerHTML = result;//javascript syntax to display resulst
    $("#resultTab").html(result); //jquery syntax to display result
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
}


//manually providing the value in the object
/*var carsArray = ["Audi", "Lexus"];
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
personArray[1].checkData();*/