const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// FOR EACH

let studentFound = {}

students.forEach(student => {
if (student.id=== 2){
  studentFound = student
}
})
console.log(studentFound);


// FOR 

let studentFound2 = {}

for ( let i = 0; i < students.length; i++){
  const student = students[i]
  if (student.id === 2 ){
    studentFound2 = student 
  }
}
console.log(studentFound2);

// FIND

const studentFound3 = students.find(student => {
return student.id === 2
})
console.log(studentFound3);
