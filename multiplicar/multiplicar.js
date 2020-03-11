//requireds
const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i} \n`;
        }
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${base}.txt`)
        });
    });
}

listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        let data = '';
        console.log('========'.green);
        console.log(`tabla de ${base}`.green);
        console.log('========'.green);
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i} \n`;
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}