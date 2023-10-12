// chiedere all'utente di inserire una parola
// creare un prompt
const word = prompt("inserisci una parola");
console.log(word);

// creare una funzione per verificare se la parola inserita è palindroma
function isPalindrome(wordNorm, wordReverse) {
    if (wordNorm === wordReverse) {
        return true
    }
    return false
}

const arrayLetters = [ ]; 
console.log(arrayLetters)

for (let i = 0; i < word.length; i++) {
    let carattere = word[i]
    console.log(i, carattere)
    arrayLetters.push(carattere)
}

const arrayReverse = arrayLetters.toReversed();
console.log(arrayReverse);

const wordReverse = arrayReverse.toString();
const wordNormal = arrayLetters.toString();

console.log(wordReverse, wordNormal);

// let caratteriReverse

// for (let i = 0; i < arrayReverse.length; i++ ) {
//     let caratteriReverse = arrayReverse[i]
//     console.log(i, caratteriReverse)
// }
// console.log(caratteriReverse)
// let Palindrome = isPalindrome(wordNormal, wordReverse);
// console.log(Palindrome);

if (isPalindrome(wordNormal, wordReverse)) {
    alert('la parola è palindroma')
} else {
    alert('la parola non è palindroma')
}


 
