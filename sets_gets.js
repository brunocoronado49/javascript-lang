// Orden de componentes de una clase
  // 1. Propiedades y metodos estaticos
  // 2. Propiedades de la clase
  // 3. Constructor
  // 4. Set y Get
  // 5. Metodos

class Person {
  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre = 'No name', codigo = 'No code', frase = 'No quote') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setFraseFavorita(frase) {
    this.frase = frase.toUpperCase;
  }

  get getFraseFavorita() {
    return this.frase;
  }

  whoIam() {
    console.log(`I am ${this.nombre}`);
  }

  myQuote() {
    console.log(`Hello, ${this.frase}`);
  }
}

const spiderman = new Person('Spiderman', '112', 'Soy spiderman');
console.log(spiderman);
spiderman.whoIam();
spiderman.myQuote();
spiderman.setFraseFavorita = 'Tu vecino hombre spider';
console.log(spiderman);
console.log(spiderman.getFraseFavorita);
