// REFERENCES AND PRIMITIVE TYPES REFRESHER

// primitive types are passed by value, ie. copied
const number = 1; // primitive type
const num2 = number; // true copy created because number is a primitive type

// objects and arrays are passed by reference, ie the pointer to the object
// is copied, not the object itself, changing a property in person also 
// changes the property in secondPerson, because there is one underlying object
const person = {name: 'Max'};
const secondPerson = person;
person.name = "Jeremy";
console.log(secondPerson);

// use the spread operator to create a copy of an object
const first = {name: 'Sam'};
const second = {...first};

first.name = 'Alpha';
console.log(second);