// What is Destructuring?
const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
};

const {name: n} = student;
console.log(n);