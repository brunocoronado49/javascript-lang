const elMayor = (a, b) => (a > b) ? a : b;
console.log(elMayor(23,55));

const tieneMembresia = (miembro) => miembro ? '2 dolares' : '10 dolares';
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  elMayor(10, 15),
];

console.log({amigosArr});

const nota = 90;
const grado = nota >= 95 
  ? 'A+' : nota >= 90
  ? 'A' : nota >= 85
  ? 'B+' : 'F';

console.log({nota, grado});
