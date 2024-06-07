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
            event.preventDefault();

            const emailInput = document.getElementById('emailinput').value;

            const testoMessaggio = document.querySelector('.messaggio');
            

             // verifica funzionamento console
    
            console.log(emailInput);
        }

        
    )

// controlla che sia nella lista di chi può accedere, iniziando un ciclo con for nella emaillist
    let accessoConsentito = false;  

    for (let i = 0; i < emailList.length && !accessoConsentito; i++) {

        

        if (emailList[i] === emailInput) {

            accessoConsentito = true;
            
            
       }
        
    }





// stampa un messaggio appropriato sull’esito del controllo.