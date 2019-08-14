// Arrow Functions

// function declaration
function printMyName(name) {
    console.log(name);
}

// arrow function declaration
const printMyNameArrow = (name) => {
    console.log(name);
}

// can remove brackets with one argument
const fncOneArg = name => {
    console.log(name);
}

// need empty brackets with no args
const fncNoArg = () => {
    console.log("Max");
}

// one-line syntax
const multiply = number => number * 2;

printMyName("Jeremy");
printMyNameArrow("Adams");
console.log(multiply(5));