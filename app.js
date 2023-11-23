const readlineSync = require('readline-sync')
const {numero_aleatorio, comparacion_numero} = require('./modulos')

const numero_usuario = () =>{
    return parseInt(readlineSync.question('Ingrese un numero del 1 al 100: '))
}

const juego = () =>{
    let num_usuario = 0
    const num_aleatorio = numero_aleatorio()
    let intentos = 0

    while(num_aleatorio !== num_usuario){
        num_usuario = numero_usuario()
        comparacion_numero(num_usuario, num_aleatorio)
        intentos ++
    }
    console.log(`En ${intentos} intentos.`);
}

juego()