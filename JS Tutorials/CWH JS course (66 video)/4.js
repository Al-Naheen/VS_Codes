// Primitive data types

// String
let name = "Naheen";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));
console.log(typeof marks);

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar)); //output-Object

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));


// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr)); //output-Object

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

//Function
function findName() {
    
}
console.log( typeof findName);

// Date
let date = new Date();
console.log( typeof date);

