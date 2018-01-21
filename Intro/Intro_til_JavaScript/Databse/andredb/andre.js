firebase.initializeApp({
    apiKey: 'AIzaSyBGNCNulwiuUPU1Xwqp8yzOlTmo18yVFsQ',
    authDomain: 'minforstedb-e386c.firebaseapp.com',
    projectId: 'minforstedb-e386c'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var brukernavnE = document.querySelector('.navn');
var pwE = document.querySelector('.pw');
var emailE = document.querySelector('.email');
var knappE = document.querySelector('.knapp');
var listeE = document.querySelector('.liste');

knappE.addEventListener('click', function () {
    db.collection("brukere").add({
        Brukernavn: brukernavnE.value,
        Passord: pwE.value,
        Email: emailE.value
    })
    brukernavnE.value = "";
    pwE.value = "";
    emailE.value = "";
})

var ref = db.collection("brukere");

ref.onSnapshot(function (data) {
    brukernavnE.innerHTML = "";
    var brukere = data.docs
    for(var x in brukere){
        listeE.innerHTML += "<li>" + brukere [x].data().Brukernavn + "</li>";
    }

})