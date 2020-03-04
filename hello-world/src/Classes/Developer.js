class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

var printName = function () {
    console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// call() & apply()
// '.call()' can be used to explicitly bind a function to an object
printName.call(me);

// printName() is not bound to an object so 'this' is undefined
printName();

var printInfo = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

// Create an array of languages
languages = ['Javascript', 'C++', 'Python'];

// Pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);

// Pass all the arguments in one array to .apply()
printInfo.apply(me, languages);

// bind()
// Here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);

// bound newPrintName() prints appropriately
newPrintName();

// unbound printName() prints undefined
printName();

// New Binding
var printInfo = function (firstname, lastname, lang1, lang2, lang3) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

languages = ['Javascript', 'C++', 'Python'];
printInfo('Robin', 'Wieruch', languages[0], languages[1], languages[2]);

// Caveat: arrow functions and ‘this’
/*
var getName = () => console.log(this.firstname);

var me = new Developer('Robin', 'Wieruch');
const printMyName = getName.bind(me);

printMyName()*/

// Coding Challenge: Fix the error
let me2 = {
    name: "Robin",
    getName: function () {
        console.log(this.name);
    }
}

var getMyName = me2.getName;
getMyName.call(me2);

// You have to bind the function to the object because just assigning it to a var
// ... is equivalent to assigning a standalone function to a var
var getMyName2 = me2.getName.bind(me2);
getMyName2();