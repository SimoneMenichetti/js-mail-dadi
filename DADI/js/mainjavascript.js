// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto




    // creazione const estrapolazione element dal dom
        const bottonePlay = document.getElementById("playButton");

        bottonePlay.addEventListener("click", play);

        function play(){
             // Generiamo un numero random da 1 a 6 per il giocatore
             let playerUtente = Math.floor(Math.random() * 6) + 1;
                // verifichiamo in console numero giocatore utente
                console.log(playerUtente); 

             // Generiamo un numero random da 1 a 6 per il computer
             let playerComputer = Math.floor(Math.random() * 6) + 1;
                 // verifichiamo in console numero computer giocante
                 console.log(playerComputer); 


                  // Mostra i punteggi dell'utente e del computer
            let risultatoGioco = document.querySelector(".risultato");

            risultatoGioco.innerHTML = "Il giocatore ha ottenuto " + playerUtente + ". Il computer ha ottenuto " +  playerComputer + ".";


            // tabilire il vincitore, in base a chi fa il punteggio più alto

        }

  