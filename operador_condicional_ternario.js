/**
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web para consultar si esta abierto hoy
const dia = 2;
const horaActual = 10;

let horaApertura;
let mensaje;

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) 
  ? 'Esta abierto' 
  : `Esta cerrado, abrimos a las ${horaApertura}`;

console.log({horaApertura});
