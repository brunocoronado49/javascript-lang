let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

let j = 0;
do {
  j++;
  console.log(j);
} while (j < 10);

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let carro = 0;

while (carros[carro]) {
  if (carro === 1) {
    break;
  }
  console.log(carros[carro]);
  carro++;
}
