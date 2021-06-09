/* Consegna:
Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50 */



document.getElementById('btn').addEventListener('click', function(){
    
    var pcNumbers = [];

    var userGuess;

    var level = parseInt(document.getElementById('difficulty').value);

    while (pcNumbers.length < 16) {

        if (level == 0) {
            var rndNumber = getRndInteger(1,100);
            userGuess = 100;
            
        } else if(level == 1){
            var rndNumber = getRndInteger(1,80);
            userGuess = 80;
            
        } else if (level == 2){
            var rndNumber = getRndInteger(1,50);
            userGuess = 50;
        }

        if (!pcNumbers.includes(rndNumber)) {
            pcNumbers.push(rndNumber);     
        } 
    }

    var userNumbers = [];

    var attempts = 0;

    while (userNumbers.length < userGuess - pcNumbers.length) {

        var number = parseInt(prompt('Inserisci un numero da 1 a '+ userGuess));

        while (isNaN(number) || number <= 0 || number > 100) {
            number = parseInt(prompt('Attenzione!!! Puoi Inserire solo numeri da 1 a '+ userGuess));
        } 

        if (pcNumbers.includes(number)) {
            alert('Hai perso')
            document.getElementById('result').innerHTML = 'Il tuo punteggio è :' + ''+ userNumbers.length ;
            document.getElementById('score').innerHTML = userNumbers.length;
            document.getElementById('pcnumbers').innerHTML = 'PC numbers: ' + pcNumbers;
            document.getElementById('usernumbers').innerHTML = 'Yours numbers: ' + userNumbers;
            break
        
             
        } else{
            if (!userNumbers.includes(number)) {
                userNumbers.push(number); 
                
            }else{
                alert('numero già inserito')
            }
        }
            
        attempts++

        document.getElementById('attempts').innerHTML=  attempts
        document.getElementById('result').innerHTML = 'Il tuo punteggio è :' + ''+ userNumbers.length ;
        document.getElementById('score').innerHTML = userNumbers.length;
        document.getElementById('pcnumbers').innerHTML = 'PC numbers: ' + pcNumbers;
        document.getElementById('usernumbers').innerHTML = 'Yours numbers: ' + userNumbers;
    }

});

// ----------- FUNZIONI ------------ //


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
