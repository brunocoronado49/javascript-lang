// Orden de componentes de una clase
  // 1. Propiedades y metodos estaticos
  // 2. Propiedades de la clase ,
  // 3. Constructor
  // 4. Set y Get
  // 5. Metodos

class Person {

  static _conteo = 0;
  static get conteo() {
    return Person._conteo;
  }

  static mensaje() {
    console.log('Hola, soy un metodo estatico');
  }

  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre = 'No name', codigo = 'No code', frase = 'No quote') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Person._conteo++;
  }

  set setFraseFavorita(frase) {
    this.frase = frase.toUpperCase();
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

const spiderman = new Person('Spiderman', '224', 'Soy spiderman');
const halo = new Person('Master chief', '117', 'Soy el jeilo verde');
const halo2 = new Person('Master chief', '117', 'Soy el jeilo verde');
const halo3 = new Person('Master chief', '117', 'Soy el jeilo verde');

console.log(spiderman);
spiderman.whoIam();
spiderman.myQuote();
spiderman.setFraseFavorita = 'Tu vecino hombre spider';
console.log(spiderman);
console.log(spiderman.getFraseFavorita);

console.log('****** Conteo estatico ******');
// Person._conteo = 2;
console.log(`${Person.conteo} instancias`);
Person.mensaje();

Person.propiedadExterna = 'Hola Mundo';
console.log(Person.propiedadExterna);
