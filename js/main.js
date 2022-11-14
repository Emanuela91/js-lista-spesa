// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

let myList = ["pane", "pasta", "pomodori", "insalata", "pesce", "formaggio"];

// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }


console.log(myList);

let i = 0;
while (i < myList.length) {
    console.log(myList[i]);
    i ++;
}

// --------------------------------------------------------
// aggiungi alla lista "BONUS"
// const button = document.getElementById("aggiungi");

// button.addEventListener("click",
//     function(){
//         let newArticle = document.getElementById("text").value;
//         myList.push(newArticle);

//         let i = 0;
//         while (i < myList.length) {
//             console.log(myList[i]);
//             i ++;
//         }
//     }        
// )
