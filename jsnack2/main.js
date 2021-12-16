/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo
*/
const numero = parseInt(prompt("Inserisci numero"));

for (let i = 0; i < numero; i++) {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 100 + 1);
    myArray.push(random);
  }
  console.log(myArray);
}
