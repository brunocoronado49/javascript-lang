const hoy = new Date();
let dia = hoy.getDay();

if (dia === 0) {
  console.log('Es domingo');
} else if (dia === 1) {
  console.log('Es lunes');
} else if (dia === 2) {
  console.log('Es martes');
} else {
  console.log('No es lunes ni martes ni domingo...');
}

// Sin usar if Else, switch, solo objetos/arreglos
dia = 3; // 0 = domingo, 1 = lunes... 6 = sabado
diaLetras = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado'
};

// Dia de la semana
console.log(diaLetras[dia] || 'Dia no valido');
