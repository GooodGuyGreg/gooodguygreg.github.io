firebase.initializeApp({
    apiKey: "AIzaSyAubFKhInGURBIwKhBlIyZhuzI5TJ6tPBM",
    authDomain: "bil-tabell.firebaseapp.com",
    databaseURL: "https://bil-tabell.firebaseio.com",
    projectId: "bil-tabell",
    storageBucket: "bil-tabell.appspot.com",
    messagingSenderId: "1010383516252"
};

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnInput = document.querySelector('.Navn');
var bilnummerInput = document.querySelector('.Bilnummer');
var fartInput = document.querySelector('.Fart');

sendKnapp.addEventListener('click', function () {

    var storageRef = firebase.storage().ref('it-1/Bil-tabell');

    uploadTask.on('state_changed',
        function () {},
        function () {},
        function () {
            db.collection('Navn').add({
                Navn: navnInput.value


            })

        })



};