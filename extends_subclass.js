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

// Clase que extiende
class Heroe extends Person {
  team = 'No team';

  constructor(nombre, codigo, frase, team) {
    super(nombre, codigo, frase);
    this.team = team;
  }

  whoIam() {
    console.log('Hello spider');
    super.whoIam();
  }
}

const spiderman = new Heroe('Spiderman', '112', 'Soy spiderman', 'Avengers');
console.log(spiderman);
spiderman.whoIam();
