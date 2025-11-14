class Person {
  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre = 'No name', codigo = 'No code', frase = 'No quote') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

const spiderman = new Person('Spiderman', '112', 'Soy spiderman');
console.log(spiderman);
