let message = "Hello, World!";
console.log(message);

let newMessage = "This is a new message!";
console.log(newMessage);

let randomNumber = 22;
console.log("Random number is: " + randomNumber);

const CONSTANT_EXAMPLE = "Shouldn't change";
console.log(CONSTANT_EXAMPLE);

let objectExample = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(objectExample['age']);

let variableExample = "This is a variable";
console.log(variableExample);
variableExample = "This variable has been redeclared";
console.log(variableExample);
//Example of redeclaring a variable


// Examples of different operators
// Arithmetic Operators
let x = 10 + 5; // Addition
let y = 10 - 5; // Subtraction
let z = 10 * 5; // Multiplication
let a = 10 / 5; // Division
let b = 10 % 3; // Modulus
let c = 10 ** 3; // Exponentiation
console.log(x, y, z, a, b, c);

// Asignment Operators
let d = 10;
console.log(d);

// Comparison Operators
let age = 18;
let isAdult = age >= 18;
console.log("Is adult:", isAdult);

let isNotAdult = age < 18;
console.log("Is not adult:", isNotAdult);

let evenNumber = 4;
let isEven = evenNumber % 2 === 0;
console.log("Is even:", isEven);

// Ternery Operator
let ageCheck = 60;
let hasLicense = true;
let canDrive = (ageCheck >= 18 && hasLicense) ? "Can drive" : "Cannot drive";
console.log(canDrive);

bornInCountry = false;
registeredInCountry = false;
let citizenCheck = (bornInCountry || registeredInCountry) ? "Citizen" : "Not a citizen";
console.log(citizenCheck);

let testvalue = (0 || 1 || 2 || 3)
console.log(testvalue); 