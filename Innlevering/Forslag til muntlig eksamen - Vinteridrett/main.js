firebase.initializeApp({
    apiKey: "AIzaSyDrUtob6voBiAYMEEqy1vquLwsALXlGm4g",
    authDomain: "firestore-4190b.firebaseapp.com",
    databaseURL: "https://firestore-4190b.firebaseio.com",
    projectId: "firestore-4190b",
    storageBucket: "firestore-4190b.appspot.com",
    messagingSenderId: "586871458162"
});

let db =            firebase.firestore();

let inputFornavn        = document.querySelector('#inpFornavn');
let inputEtternavn      = document.querySelector('#inpEtternavn');
let inputGren           = document.querySelector('#inputGren');
let inputNasjonalitet   = document.querySelector('#inputNasjon');
let inputAge            = document.querySelector('#inputAge');
let inputBilde          = document.querySelector('#inputBilde');
let inputTable          = document.querySelector('#brukersjema');
let buttonAdd           = document.querySelector('#buttonAdd');

buttonAdd.addEventListener('click', function () {
    db.collection("SkiUttøvere").add({
        Fornavn:        inputFornavn.value,
        Etternavn:      inputEtternavn.value,
        Gren:           inputGren.value,
        Nasjonalitet:   inputNasjonalitet.value,
        Alder:          inputAge.value,
        Bilde:          inputBilde.value
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })

        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    inputFornavn.value          = "",
        inputEtternavn.value    = "",
        inputGren.value         = "",
        inputNasjonalitet.value = "",
        inputAge.value          = "",
        inputBilde.value        = ""
})

let ref     = db.collection("SkiUttøvere");

    ref.onSnapshot(function (data) {
        inputTable.innerHTML = "";
        let document = data.docs;
        for(let x in document){
            inputTable.innerHTML += "<tr>" + "<td>" + document[x].data().Fornavn + "</td>" + "<td>" + document[x].data().Etternavn + "</td>" + "<td>" + document[x].data.Gren + "</td>" + "<td>" + document[x].data.Nasjonalitet + "</td>" + "<td>" + document[x].data.Alder + "</td>" + "</tr>"
        }

    })
















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

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
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
};

