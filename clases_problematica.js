const pedro = {
  nombre: 'Pedro',
  edad: 23,
  imprimir() {
    console.log(`Nombre ${this.nombre} - Edad ${this.edad}`);
  }
}

function Persona(nombre, edad) {
  console.log('Se ejecuto esta linea');

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Nombre ${this.nombre} - Edad ${this.edad}`);
  }
}

const maria = new Persona('Maria', 25);
console.log(maria);
maria.imprimir();
