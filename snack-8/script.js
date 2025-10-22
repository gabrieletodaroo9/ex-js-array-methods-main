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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// FOR EACH

let studentClass = ""

students.forEach(student=>{
  if(student.name === "Marco Lanci") {
    studentClass = student.class
  }
})
console.log(studentClass);

// FOR 

let studentClass2 = ""

for(i = 0; i < students.length; i++) {
  student = students[i]
  if (student.name === "Marco Lanci")
    studentClass2 = student.class 
}
console.log(studentClass2);

// FIND

const thisstudent = students.find(student => {
  return student.name === "Marco Lanci"
})

const studentClass3= thisstudent.class

console.log(studentClass3);
