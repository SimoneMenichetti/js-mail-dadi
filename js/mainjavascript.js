// Mail :email:
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


   

// 1* //  Creazione Array contenente le email autorizzate

    const emailAutorizzate = ["macgyver@example.com", "johncena@example.com", "chucknorris@example.com"];

    // controllo in console

    console.log(emailAutorizzate);

// 2* Chiedi all’utente la sua email,

    // estrapolazione elemento del form
    
    const formEmail = document.querySelector(".emailform");

    // estrapolazione elemento input 

    const inviaMail = document.querySelector(".submit");

    const messaggio= document.querySelector(".messaggio");

    // aggiunta eventlistener per l'interazione dell'utente al click

    inviaMail.addEventListener ("click",
        function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('emailinput').value;
            let emailTrovata = false;

             // verifica funzionamento console click
    
            console.log(emailInput);

             // Controlla se l'email è nella lista delle email autorizzate usando un ciclo for
             for (let i = 0; i < emailAutorizzate.length; i++) {
                if (emailAutorizzate[i] === emailInput ) {
                    emailTrovata = true;
                    
                    
                }
            }
        
            // stampa un messaggio appropriato sull’esito del controllo.
            if (emailTrovata) {

                
                document.querySelector('.messaggio').textContent = "Accesso consentito! sei il benvenuto!";
                messaggio.style.color= "green";
                console.log(emailTrovata);
            } else {
                document.querySelector('.messaggio').textContent = "Accesso negato! ingresso non autorizzato!";
                messaggio.style.color= "red";
                console.log(emailTrovata);
                
            }

        }
    )

