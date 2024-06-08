// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto




    // creazione const estrapolazione element dal dom
        const bottonePlay = document.getElementById("playButton");

      
        bottonePlay.addEventListener("click", play);

        function play(){
             // Generiamo un numero random da 1 a 6 per il giocatore
             let playerUtente = Math.floor(Math.random() * 6) + 1;
                // verifichiamo in console numero giocatore utente
                console.log("Il giocatore ha ottenuto: " + playerUtente); 

             // Generiamo un numero random da 1 a 6 per il computer
             let playerComputer = Math.floor(Math.random() * 6) + 1;
                 // verifichiamo in console numero computer giocante
                 console.log("il computer ha ottenuto :" + playerComputer); 



            // stabilire il vincitore, in base a chi fa il punteggio più alto inserendo una condizione

                              // Mostra i punteggi dell'utente e del computer
            // utente
                var risultatoGiocoUtente = document.querySelector(".risultatogiocatore");
                    risultatoGiocoUtente.innerHTML = "Il giocatore ha ottenuto " + playerUtente  + "";
                    risultatoGiocoUtente.style.color="#73FBFD";
                

            // computer

            var risultatoGiocoComputer = document.querySelector(".risultatocomputer");
                risultatoGiocoComputer.innerHTML = "Il giocatore ha ottenuto " + playerComputer  + "";
                risultatoGiocoComputer.style.color="#73FBFD";



          

                
            // condizione vittoria / sconfitta o pareggio

                  // vittoria/sconfitta/pareggio
                 var risultatoGiocoFinale = document.querySelector(".risultatofinale");
                 risultatoGiocoFinale.style.color= "yellow";
                    
                
                if (playerUtente > playerComputer) {
                   

                      risultatoGiocoFinale.innerHTML = " HAI VINTO!";

                    console.log("Il giocatore ha vinto!");

                } else if (playerUtente  < playerComputer) {

                     risultatoGiocoFinale.innerHTML = " IL COMPUTER HA VINTO!";
                     

                    console.log("Il computer ha vinto!");
                } else {

                      risultatoGiocoFinale.innerHTML = "PAREGGIO!";

                    console.log("Pareggio!");

                    
                }

                

        }

        