function getRandomPcNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum(numero1, numero2) {
    somma = numero1 + numero2
    return somma
}

// function isWordEven(evenOrOdd) {
//     if (evenOrOdd === "true") {
//         return 0
//     } else if (evenOrOdd === "false") {
//         return 1
//     }
// }

function isEven(numero) {
    if (numero % 2 === 0) {
        return true
    }
    return false
}

let evenOrOddUser = prompt('scrivi pari o dispari')
console.log(evenOrOddUser)
let numeroUtente = parseInt(prompt("scrivi un numero da 1 a 5"))
console.log(numeroUtente)

const minNumber = 1
const maxNumber = 5


let pcNumber = 0;
let somma = 0;

pcNumber = getRandomPcNumber(minNumber, maxNumber);
console.log(pcNumber)

somma = sum(numeroUtente, pcNumber)
console.log(parseInt(somma))

if (evenOrOddUser && isEven(somma) === true ) {
    alert('hai vinto')
} else if (evenOrOddUser && isEven(somma) === false){
    alert('hai vinto')
} else {
    alert('hai perso')
}
// console.log(isWordEven(evenOrOddUser), isEven(somma))