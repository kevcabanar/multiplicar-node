const argv = require('./config/yargs').argv; //el nombre argv es el que se exporta en yargs
const colors = require('color');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Listado de la Base ${argv.base} \n${archivo}`))
            .catch(err => console.log(`error: ${err}`));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:'.red + `${archivo}`.green))
            .catch(err => console.log(`error : ${err}`));
        break;
    default:
        console.log('Comando no reconocido');
}