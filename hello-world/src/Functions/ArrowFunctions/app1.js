/*
 Arrow Functions are a more concise way of writing a function in JavaScript.
 They are frequently used in React to make things more efficient and simpler
 (Event Handling, preventing bugs, etc.)

 Arrow Functions are one of Js’s additions in ES6 which pushed Js forward in functional programming
 Ex1
*/


// JavaScript ES5 function
function getGreetingFunc() {
    return 'Welcome to JavaScript';
}

// JavaScript ES6 arrow function with body
const getGreetingArrow1 = () => {
    return 'Welcome to JavaScript';
}

// JavaScript ES6 arrow function without body and implicit return
const getGreetingArrow2 = () =>
    'Welcome to JavaScript';

console.log(getGreetingFunc());
console.log(getGreetingArrow1());
console.log(getGreetingArrow2());