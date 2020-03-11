const students = [
    {ID: 1, present: true},
    {ID: 2, present: true},
    {ID: 3, present: false},
];

const presentStudents = students.filter(function (student) {
    return student.present;
});

const simpler = students.filter(student => student.present);
console.log(presentStudents);
console.log(simpler);