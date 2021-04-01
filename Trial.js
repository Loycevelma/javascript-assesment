// this is an object
let person = {
    firstName: "Juveline",
    lastName: "cynthia",
    Age: 26,
    Height: 267,
    Weight: 67,
    fullName: function() { // this is a method
        var details = (this.firstName + " " + this.lastName);
        console.log(details)


    }
};

console.log(person.Height)
console.log(person.lastName)
person.fullName()




function fee() {
    var a = 4;

    console.log(a)

    function foo() {
        var b = 3;
        var c = a + b
        console.log(b)

        function fuu() {
            "use strict"
            var d = 5;
            var e = a + b + d

            console.log(e);

        };
        fuu()
    };
    foo()
};
fee()

//this is nesting
function age() {
    var age = 68;
    if (age >= 70) {
        console.log("A ");
    } else
    if (age >= 60) {
        console.log("B ");
    } else if (age >= 50) {
        console.log("C ");
    } else
    if (age <= 49) {
        console.log("D ");
    } else if (age >= "E") {
        console.log("E"); //this are conditions
    }

};
age();