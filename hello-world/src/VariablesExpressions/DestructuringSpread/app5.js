const person = {name: "Jhon"};
const student = {ID: "21", GPA: "3.0"};

const new_object = {...person, ...student, semester: '3'};
console.log(new_object);