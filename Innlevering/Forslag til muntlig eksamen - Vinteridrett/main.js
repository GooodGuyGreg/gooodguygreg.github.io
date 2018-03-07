firebase.initializeApp({
    apiKey: "AIzaSyDrUtob6voBiAYMEEqy1vquLwsALXlGm4g",
    authDomain: "firestore-4190b.firebaseapp.com",
    databaseURL: "https://firestore-4190b.firebaseio.com",
    projectId: "firestore-4190b",
    storageBucket: "firestore-4190b.appspot.com",
    messagingSenderId: "586871458162"
});





let inputFornavn        = document.querySelector('#inpFornavn');
let inputEtternavn      = document.querySelector('#inpEtternavn');
let inputGren           = document.querySelector('#inputGren');
let inputNasjonalitet   = document.querySelector('#inputNasjon');
let inputAge            = document.querySelector('#inputAge');
let inputBilde          = document.querySelector('#inputBilde');
let inputTable          = document.querySelector('#brukersjema');
let buttonAdd           = document.querySelector('#buttonAdd');











let db                  = firebase.firestore();

let skiuttøver          = db.collection('SkiUttøver');

let utøverskjema        = document.querySelector('#brukerskjema');

let utøvere             = document.querySelector('#brukertabell');

let inpFornavn          = document.querySelector('#inpFornavn');
let inpEtternavn        = document.querySelector('#inpEtternavn');

utøverskjema.onsubmit = registrerBruker;

function registrerBruker(evt) {
    evt.preventDefault();
    skiuttøver.add(
        {
            Fornavn:    inpFornavn.value,
            Etternavn:  inpEtternavn.value
        }
    );
    utøverskjema.reset();
    inpFornavn.focus();
}
skiuttøver.onSnapshot(function (data) {
    let objekt = data.docs;
    utøvere.innerHTML = "noe";
    for (let x in objekt) {
        let doc = objekt[x].data();
        utøvere.innerHTML +=`
        <tr>
            <td>${doc.Fornavn}</td>
            <td>${doc.Etternavn}</td>
        </tr>`
    }
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Get the modal
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



