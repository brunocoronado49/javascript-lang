let a = 9;

if (a > 10) {
  console.log('Es mayor a 10');
} else {
  console.log('Es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

if (dia === 0) {
  console.log('Es domingo');
} else if (dia === 1) {
  console.log('Es lunes');
} else {
  console.log('No es lunes ni domingo');
}
