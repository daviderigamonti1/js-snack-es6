"use strict";
console.clear();

/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

let arrayBici = [
    {
        nome: "bici1",
        peso: 22,
    },
    {
        nome: "bici2",
        peso: 19,
    },
    {
        nome: "bici3",
        peso: 25,
    },
    {
        nome: "bici4",
        peso: 17,
    },
    {
        nome: "bici5",
        peso: 20,
    },
]
let biciLeggera = arrayBici[0];

//Ciclo ogni oggetto dentro l'array
for(let i = 0; i < arrayBici.length; i++) {

    //Condizione per prendere la bici dal peso minore
    if(biciLeggera.peso > arrayBici[i].peso) {
        biciLeggera = arrayBici[i];
    }
}
console.log(`La bici più leggera è ${biciLeggera.nome} e pesa ${biciLeggera.peso}kg`);

/*

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

let squadreCalcio = [
    {
        nome: "squadra1",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra2",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra3",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra4",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra5",
        puntiFatti: 0,
        falliSubiti: 0
    }
]
for(let i = 0; i < squadreCalcio.length; i++){
    squadreCalcio[i].puntiFatti = randomNumber(1, 100);
    squadreCalcio[i].falliSubiti = randomNumber(1, 100);
}
console.log(squadreCalcio);
let nomiFalli = [];
for(let i = 0; i < squadreCalcio.length; i++){
    nomiFalli.push([squadreCalcio[i].nome, squadreCalcio[i].falliSubiti]);
}
console.log(nomiFalli);

/*

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

*/

//Creo un array di numeri
const array = [10, 20, 30, 40, 50, 60, 70];

//Funzione con la quale prendiamo i valori dell'array comoresi tra gli indici a e b e li inseriamo in un altro array
function sottoSequenza(array, a, b){
    if(a < b && a >= 0 && !isNaN(a) && !isNaN(b)){
        return array.slice(a, b);
    }
}

//Inserisco i valori di a e b
let risultato = sottoSequenza(array, 1, 5);
console.log(risultato);