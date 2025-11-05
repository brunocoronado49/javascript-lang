function saludar() {
  console.log('Hola Mundo');
}

const saludar2 = function() {
  console.log('Hola Mundo 2');
}

const saludarNombre = function(nombre) {
  console.log(arguments);
  console.log('Hola', nombre);
}

const saludarFlecha = () => {
  console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
  console.log('Hola Flecha', nombre);
}

saludar();
saludar2();
saludarNombre('Bruce', 28, true);
saludarFlecha();
saludarFlecha2('Francisco');
