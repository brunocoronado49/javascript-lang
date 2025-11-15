// Un singleton es una instancia unica de la clase

class SingletonService {
  static instancia;
  nombre = '';

  constructor(nombre = '') {
    if (!!SingletonService.instancia) {
      return SingletonService.instancia;
    }

    SingletonService.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new SingletonService('Spiderman');
const instancia2 = new SingletonService('Batman');
console.log(`Nombre en la instancia1: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1: ${instancia2.nombre}`);
