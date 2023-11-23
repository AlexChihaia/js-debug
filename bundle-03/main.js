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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const auto = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];


const gasolineCars = auto.filter((auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = auto.filter((auto, dieselCars) => {
    dieselCars = auto.type.toLowerCase() === 'diesel'

    return dieselCars
});

const otherCars = auto.filter((auto) => {
    return auto.type.toLocaleLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);
console.log('*******************************');

console.log('Auto a diesel');
console.log(dieselCars);
console.log('*******************************');

console.log('Tutte le altre auto');
console.log(otherCars);


/*La funzione restituisce 3 array con 3 tipi di vettura : a benzina, diesel oppure altro.
A riga 59 manca una ',' tra gli oggetti. 
Riga 67 '=>' scritta in modo incorretto.
Riga 75 va utilizzato && (and) al posto di || (or).
Va assegniato il valore a dieselCars.
Va gestito il problema delle maiuscole attraverso la funzione toLowerCase

*/