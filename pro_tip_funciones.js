function crearPersona(nombre, apellido) {
  return {nombre, apellido};
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Francisco', 'Rangel');
console.log(persona);

const {apellido} = crearPersona2('Bruce', 'Wayne');
console.log(apellido);

const imprArgs = (...args) => {
  return args;
}

const [numero, casado, vivo, nombre, saludo] = imprArgs(10, true, false, 'Bruce', 'Hola');
console.log({numero, casado, vivo, nombre, saludo});

const batman = {
  nombre: 'Bruce wayne',
  codeName: 'Batman',
  vivo: true,
  edad: 28,
  trajes: ['New 52', 'Nolan', 'BVS', 'Pattinson']
};

const imprimirProps = ({nombre, codeName, vivo, edad = 30, trajes}) => {
  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
  console.log(trajes);
}

imprimirProps(batman);
