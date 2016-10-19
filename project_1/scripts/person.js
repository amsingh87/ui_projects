function Person()
{
    var firstName= " ";
    var lastName= " ";
    this.address = "Texas";

this.setfirstName = function(fname)
{
    firstName = fname;
}

this.getfirstName = function()
{
    return firstName;
}

this.setlastName = function(lname)
{
    lastName = lname;
}

this.getlastName = function()
{
    return lastName;
}
}

var pObj = new Person();
console.log(pObj.address)
pObj.setfirstName('John');
console.log(pObj.getfirstName());
pObj.setlastName('Drew');
console.log(pObj.getlastName());
