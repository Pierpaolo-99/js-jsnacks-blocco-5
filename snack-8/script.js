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

// extended
const student = students.find((Element) => {
  return Element.name === 'Marco Lanci'
})

console.log(student.class);

//abbreviated
const studentMarco = students.find( element => element.name === 'Marco Lanci')

console.log(studentMarco.class);


