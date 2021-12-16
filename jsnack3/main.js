/*
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const container = document.getElementById("container");
const redBox = document.createElement("div");
redBox.classList.add("red");
const greenBox = document.createElement("div");
greenBox.classList.add("green");
container.appendChild(redBox);
container.appendChild(greenBox);

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 == 0) {
    greenBox.innerHTML += myArray[i];
  } else {
    redBox.innerHTML += myArray[i];
  }
}
