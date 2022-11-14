// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

let myList = ["pane", "pasta", "pomodori", "insalata", "pesce", "formaggio"];

// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }

let i = 0;

while (i < myList.length) {
    console.log(myList[i]);
    i ++;
}


// aggiungi alla lista
// let aggiungi = prompt("aggiungi alla lista");
// myList.push(aggiungi);
// console.log(myList[i]);