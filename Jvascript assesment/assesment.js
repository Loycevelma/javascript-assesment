var person = { //An object is declared using a variable or  a function.
        name: "Loyce",
        age: 18, //It has got properties of the same object.
        weight: 59.6,
        height: 1.5, //The properties of an object are separated using  a colon.
    } //Object properties  are always enclosed within the curly braces.
console.log(person.weight) //We access the properties of an object usind the object name and a dot noatation.


var a = "Loyce" //Global scope

function name() { //function scope
    console.log(a)
    var b = "Velma" //Local scope
    console.log(a + b)
}
name()

function one1() {
    return {
        bar: "hello"
    };
}

function two2() {
    return {
        bar: "hello"
    };
}

//The above  functions will not give an output this is because we used return and return does not give 
//an output unless we console.log/alert and call the function.Again their isno variable declaration.
//Function name does not consist ofnumbers.