firebase.initializeApp({
    apiKey: 'AIzaSyBqAAJIYfX2nS5GXk28icdVi1-89tclCck',
    authDomain: 'huskeliste-170fe.firebaseapp.com',
    projectId: 'huskeliste-170fe'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector('.todo');
var knappE = document.querySelector('.knapp');
var listeE = document.querySelector('.liste');


knappE.addEventListener('click', function () {
    db.collection("Huskeliste").add({
        Todo: todoE.value,
    })
    todoE.value = "";
});

var ref = db.collection("Huskeliste");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokumenter = data.docs;
    for(var x in dokumenter){
        listeE.innerHTML += "<li>" +  dokumenter [x].data().Todo + "</li>";
    }
})