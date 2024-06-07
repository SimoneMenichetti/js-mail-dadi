// Mail :email:
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



// 1* //  Creazione Array contenente le email autorizzate

    const emailList = ["macgyver@example.com", "johncena@example.com", "chucknorris@example.com"];

    // controllo in console

    console.log(emailList);

// 2* Chiedi all’utente la sua email,

    // estrapolazione elemento del form
    
    const formEmail = document.querySelector(".emailform");

    // estrapolazione elemento input 

    const inviaMail = document.querySelector(".submit");

    // aggiunta eventlistener per l'interazione dell'utente al click

    inviaMail.addEventListener ("click",
        function(event) {
            event.preventDefault()
        }
    )




// controlla che sia nella lista di chi può accedere,





// stampa un messaggio appropriato sull’esito del controllo.