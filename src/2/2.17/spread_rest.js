// Spread & Rest Operators
// Spread: split up array elements OR object properties
// Rest: Used to merge a list of function arguments into an array

let oldArray = ["A", "B", "C"];
let oldObject = {"A": 1, "B": 2, "C": 3};

// spread operator
let newArray = [...oldArray, "D", "E", "F"]; // spread out the old array
let newObject = {...oldObject, "D": 4}; // spread out the old object
console.log(newArray);
console.log(newObject);

// rest operator
const filter = (...args) => {
    return args.filter(el => el % 2 === 0);
}

console.log(filter(1, 2, 3, 1, 1, 10, 5, 4, 100, 24));