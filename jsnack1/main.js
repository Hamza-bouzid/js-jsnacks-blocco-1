/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

const myArray = [];

let somma = 0;
let contatore = 0;

while (somma < 50) {
  const richiesta = parseInt(prompt("Inserisci numero"));
  myArray.push(richiesta);
  somma += myArray[contatore];
  contatore++;
}

console.log(myArray);
console.log(somma);
