const numero_aleatorio = () =>{
    return Math.floor(Math.random() * 100) + 1
}

const comparacion_numero = (numero, numero_secreto) => {
    if(numero === numero_secreto) console.log('Felicidades acertaste el numero');
    else if(numero >= numero_secreto) console.log('Numero demasiado alto');
    else console.log('Numero demasiado bajo');
}

module.exports = {numero_aleatorio, comparacion_numero}