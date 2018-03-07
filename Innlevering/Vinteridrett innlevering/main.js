var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


firebase.initializeApp({
    apiKey: "AIzaSyDrUtob6voBiAYMEEqy1vquLwsALXlGm4g",
    authDomain: "firestore-4190b.firebaseapp.com",
    databaseURL: "https://firestore-4190b.firebaseio.com",
    projectId: "firestore-4190b",
    storageBucket: "firestore-4190b.appspot.com",
    messagingSenderId: "586871458162"
});
// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();
// oppretter kobling til "mappen" (collection) brukere i Firestore.
let brukere         = db.collection('brukere');
//Henter form-elementet "brukerskjema" fra DOM-en
let brukerskjema    = document.querySelector('#brukerskjema');
//Henter tabell-elementet (tbody) fra DOM-en
let brukertabell    = document.querySelector('#brukertabell');

//Henter input-elementene fra DOM-en
let inpFornavn      = document.querySelector('#inpFornavn');
let inpEtternavn    = document.querySelector('#inpEtternavn');
let inpGren         = document.querySelector('#inputGren');
let inpNasjon       = document.querySelector('#inputNasjon');
let inpAlder        = document.querySelector('#inputAge');
let inpBilde        = document.querySelector('#inputBilde');


//Kaller på funksjonen registrerBruker når skjemaet sendes inn
brukerskjema.onsubmit = registrerBruker;
//Legger til ny bruker i Firestore-databasen
function registrerBruker(evt) {
    evt.preventDefault();
    //Legger til nytt dokument i brukere-collectionen
    brukere.add(
        {
            Fornavn:    inpFornavn.value,
            Etternavn:  inpEtternavn.value,
            Gren:       inpGren.value,
            Nasjon:     inpNasjon.value,
            Alder:      inpAlder.value,
            Bilde:      inpBilde.value
        }
    );
    brukerskjema.reset();
    inpFornavn.focus();
}
brukere.onSnapshot(function (data) {
    let objekt = data.docs;
    brukertabell.innerHTML = "";
    for(let x in objekt){
        let doc = objekt[x].data();
        brukertabell.innerHTML +=`
                <tr>
                    <td>${doc.Fornavn}</td>
                    <td>${doc.Etternavn}</td>
                    <td>${doc.Gren}</td>
                    <td>${doc.Nasjon}</td>
                    <td>${doc.Alder}</td>
                    <td><img src=${doc.Bilde}></td>
                </tr>`
    }
});