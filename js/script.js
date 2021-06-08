/* Consegna:
Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50 */



var pcNumbers = [];

var level = parseInt(prompt('inserisci il livello di difficoltà'));
console.log(level);

while (pcNumbers.length < 16) {


    if (level == 0) {
        var rndNumber = getRndInteger(1,100);   
    } else if(level == 1){
        var rndNumber = getRndInteger(1,80);
    } else if (level == 2){
        var rndNumber = getRndInteger(1,50);
    }


    if (!pcNumbers.includes(rndNumber)) {
        pcNumbers.push(rndNumber);     
    } 
}


console.log(pcNumbers)


var userNumbers = [];

var attempts = 0;

while (userNumbers.length < 20 - pcNumbers.length) {

    var number = parseInt(prompt('Inserisci un numero da 1 a 100 per 80 volte'));

    while (isNaN(number) || number <= 0 || number > 100) {
        number = parseInt(prompt('Attenzione!!! Puoi Inserire solo numeri da 1 a 100')) 
    } 

    if (pcNumbers.includes(number)) {
        alert ('Hai perso! Il tuo punteggio è :' + userNumbers.length )
        break  
    } 
        
    if (!userNumbers.includes(number)) {
        userNumbers.push(number); 
          
    }else{
        alert('numero già inserito')
    }

    attempts++
    console.log('attemps:'+ attempts);

}

console.log(userNumbers)
console.log(attempts);

// ----------- FUNZIONI ------------ //


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
