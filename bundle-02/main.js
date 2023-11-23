/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

/* let message = '';
// ESERCIZIO 1
function checkAge() {
    let myAge = 16;

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
console.log(message); */

/*Questa funzione stampa un console in base all'età dell'user.
Abbiamo un utilizzo sbagliato di assegnazione di variabile.
myAge e message vengono riassegnate dunque dovrebbero essere dichiarate con let.
message inoltre dovrebbe essere dichiarato fuori dallo scope della funzione. */

// ESERCIZIO 2
/* function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber(); */

/*La funzione stampa in console il messaggio con la lunghezza dell'array.
L'errore sta nella scrittura della parola length. */


// ESERCIZIO 3
/* function addNumbers() {
    const userNumber = Number(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers(); */

/* La funzione stampa in console la somma del numero inserito dal user tramite un promt 
con il numero 12 e lo stampa in console. L'errore sta nel non specificare che il valore
del prompt sia un numero attraverso parseInt o Number poiché il valore di base del
prompt è una stringa */



// ESERCIZIO 4
/* function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess(); */

/*La funzione verifica il valore inserito al prompt e lo confronta con l'array userEmail
attraverso il metodo includes stampando in console un messaggio adeguato in base al caso. 
Se l'email è presente nell'array 'Accesso consentito' altrimento 'Accesso negato!'.
L'errore sta nel scrivere dei valori booleani tra gli apici facendogli diventare stringhe.
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail @mail.com', 'hismail @mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

/*La funzione ha un funzionamento simile alla precedente.
Gli errori sono altrettanto simili in quanto i valori booleano sono tra apici.
Manca la parentesi graffa di chiusura della funzione.
La condizione if dovrebbe stare fuori dal ciclo.*/