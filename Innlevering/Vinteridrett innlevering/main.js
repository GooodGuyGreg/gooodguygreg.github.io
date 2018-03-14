let modal = document.getElementById('myModal');

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

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

let db = firebase.firestore();

let brukere         = db.collection('brukere');
let brukerskjema    = document.querySelector('#brukerskjema');
let brukertabell    = document.querySelector('#brukertabell');

let inpFornavn      = document.querySelector('#inpFornavn');
let inpEtternavn    = document.querySelector('#inpEtternavn');
let inpGren         = document.querySelector('#inputGren');
let inpNasjon       = document.querySelector('#inputNasjon');
let inpAlder        = document.querySelector('#inputAge');
let inpBilde        = document.querySelector('#inputBilde');


brukerskjema.onsubmit = registrerBruker;
function registrerBruker(evt) {
    evt.preventDefault();
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
                <div id="sdiv">
                <tr>
                    <td>${doc.Fornavn}</td>
                    <td>${doc.Etternavn}</td>
                    <td>${doc.Gren}</td>
                    <td>${doc.Nasjon}</td>
                    <td>${doc.Alder}</td>
                    <td><img src=${doc.Bilde}></td>
                </tr>
                </div>`
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
