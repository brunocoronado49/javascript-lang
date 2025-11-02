let personaje = {
    nombre: 'Yor Forger',
    edad: 27,
    ocupacion: 'Asesina',
    esSoltera: false,
    coords: {
        lat: 23453.35,
        lng: -34554.34
    },
    familia: ['Loid', 'Anya', 'Yuri', 'Bond'],
    direccion: {
        zip: 23434,
        ubicacion: 'Ostania'
    },
    'ultima-temporada': false,
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre 2', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('Num familia', personaje.familia.length);
console.log('Ultimo integrante', personaje.familia[personaje.familia.length - 1]);

const x = 'esSoltera';
console.log('Soltera', personaje[x]);
console.log('Ultima temporada', personaje['ultima-temporada']);

// Mas detalles
delete personaje.ocupacion;
console.log(personaje);
delete personaje['ultima-temporada'];
console.log(personaje);

personaje.bella = true;

const entriesPares = Object.entries(personaje);
console.log({entriesPares});

// Bloqueo de propiedades
Object.freeze(personaje);
personaje.dinero = 2322344;
personaje.esSoltera = true;
personaje.direccion.ubicacion = 'Westalis';
console.log(personaje);

const props = Object.getOwnPropertyNames(personaje);
console.log(props);

const values = Object.values(personaje);
console.log(values);
