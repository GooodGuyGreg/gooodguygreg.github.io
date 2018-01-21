firebase.initializeApp({
    apiKey: "AIzaSyBGNCNulwiuUPU1Xwqp8yzOlTmo18yVFsQ",
    authDomain: "minforstedb-e386c.firebaseapp.com",
    projectId: "minforstedb-e386c"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});

