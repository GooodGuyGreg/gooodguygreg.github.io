firebase.initializeApp({
    apiKey: "AIzaSyDrUtob6voBiAYMEEqy1vquLwsALXlGm4g",
    authDomain: "firestore-4190b.firebaseapp.com",
    projectId: "firestore-4190b",
    storageBucket: "firestore-4190b.appspot.com",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {

    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on('state_changed',
        function () {},
        function () {},
        function () {
            db.collection('fjell').add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellbilde: uploadTask.snapshot.downloadURL

            })

        })



};


