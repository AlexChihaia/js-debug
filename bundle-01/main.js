/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
/* for (let i = 0; i > 5; i++) {
    console.log(i);
}
 */

/* Questo codice stampa in console i numeri da 0 a 4 attraverso un ciclo for.
Tra gli indici invece di avere ';' abbiamo ',' ovvero un errore di sintassi.
Non ci sono errori logici a meno che non si voglia cambiare il codice per renderlo più performante. */


/* const num = 4;

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        num += 5;
    }
    return num;
}

const result = addIfEven(num);
console.log(result);
 */

/* Questo codice prende i numeri pari attraverso il modulo e somma a loro 5.
Il return viene effettuato due volte. Inoltre la sintassi dell'operatore di confronto
è sbagliata. Abbiamo anche un errore logico che consiste nella non dichiarazione della constante
num. Dobbiamo inoltre salvare in una variabile il risultato poiché attraverso questa funzione non
stiamo riassegnando la variabile num.
 */


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();

/* Questa funzione esegue un ciclo da 0 a 4 e stampa i numeri.
Abbiamo dei ';' posizionati male.*/

/* let evenNumbers = [];
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();// dovrebbe restituire [2,4,6,8]

console.log(evenNumbers); */

/* Questa funzione per attraverso un modulo cerchiamo i numeri pari e li aggiungiamo
all'array definito evenNumbers e li stampiamo in console. 
Un primo errore consiste nel pushare l'indice invece del numero che si posizione in quell'indice.
Inoltre all'interno dell'if dovremmo usare numbers[i] per prendere ogni elemento nella posizione dell'indice
attraverso il ciclo. Il return dovrebbe essere posizionato fuori dal ciclo for. Abbiamo dei ';' posizionati in modo errato.
Non dobbiamo ridichiarare la variabile evenNumbers all'interno della funzione.
non abbiamo bisogno di ciclare con numbers.lenght - 1 .
 */



