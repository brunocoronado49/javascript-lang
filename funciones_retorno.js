const saludarRetorno = (nombre) => {
  return `Hola ${nombre}`;
}

const retornoSaludar = saludarRetorno('Francsico');
console.log(retornoSaludar);

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => a + b;

const getRandom = () => Math.random();

console.log(sumar(1, 2));
console.log(sumar2(2, 3));
console.log(getRandom());
