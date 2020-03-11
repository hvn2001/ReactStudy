// What is Destructuring?
const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
};

// const id = student.ID;
// const name = student.name;
// const GPA = student.GPA;

const {ID: id, name, GPA} = student;

console.log(id);
console.log(name);
console.log(GPA);