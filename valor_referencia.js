let a = 10;
let b = a;
a = 30;

console.log({a, b});

let juen = {nombre: 'Juen'};
let ana = {...juen}; // <- Romper la referencia (spread operator)
ana.nombre = 'Ana';

console.log({juen, ana});

const cambiarNombre = ({...persona}) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

// Arreglos
const frutas = ['Frutas', 'Pera', 'Sandia'];
// const otrasFturas = [...frutas];
const otrasFturas = frutas.slice();

otrasFturas.push('Mango');
console.table({frutas, otrasFturas});
