const btnDOMElement = document.getElementById('btn-play');

// console.log(btnDOMElement, pariDOMElement, dispariDOMElement, numeroUtenteDOMElement.value, numeroUtente);

const minNumber = 1
const maxNumber = 5

// const notValidNumber = isNaN(numeroUtenteDOMElement.value) || numeroUtenteDOMElement.value > 5 || numeroUtenteDOMElement.value < 0;

function getRandomPcNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum(numero1, numero2) {
    somma = numero1 + numero2
    return somma
}

function isEven(numero) {
    if (numero % 2 === 0) {
        return true
    }
    return false
}



btnDOMElement.addEventListener('click', function(){

    const pariDOMElement = document.getElementById('pari');
    const dispariDOMElement = document.getElementById('dispari');
    const numeroUtenteDOMElement = document.getElementById("numero-inserito");
    const numeroUtente = parseInt(numeroUtenteDOMElement.value);
    console.log(pariDOMElement, dispariDOMElement, numeroUtenteDOMElement, numeroUtente)

    const pari = pariDOMElement.value 
    const dispari = dispariDOMElement.value
    console.log(pari, dispari)

    const scelta = [pari, dispari]
    // let sceltaUtente = -1
    // for (let i = 0; i < scelta.length; i++) {
        // let currentNum = scelta[i]
        // if (currentNum === 0) {
        //     sceltaUtente = 0
        // } else {
        //     sceltaUtente = 1
        // }
    // }

    if (0 > 1) {
        alert('numero non corretto')
    }  
        let pcNumber = 0;
        let somma = 0;

        pcNumber = getRandomPcNumber(minNumber, maxNumber);
        console.log(pcNumber)

        somma = sum(numeroUtente, pcNumber)
        console.log(parseInt(somma))

        if (isEven(somma) === true  && scelta[0] || isEven(somma) === false && scelta [1]) {
            alert('hai vinto')
        } else {
            alert('hai perso')
        }
    
}) 