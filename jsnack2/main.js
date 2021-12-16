/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo
*/
const numero = parseInt(prompt("Inserisci numero"));

for (let i = 0; i < numero; i++) {
  const random = Math.floor(Math.random() * 100 + 1);
  let myArray = [];
  myArray += random;
  console.log(myArray);
}
