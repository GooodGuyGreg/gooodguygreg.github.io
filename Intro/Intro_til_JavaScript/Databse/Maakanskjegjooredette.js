firebase.initializeApp({
    apiKey: 'AIzaSyBqAAJIYfX2nS5GXk28icdVi1-89tclCck',
    authDomain: 'huskeliste-170fe.firebaseapp.com',
    projectId: 'huskeliste-170fe'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("Huskeliste").add({
    Todo: "Lære meg Firestore"
})