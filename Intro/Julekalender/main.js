// Initialize Firebase
var config = {
    apiKey: "AIzaSyAlFL1LN0PifxwolomLn0WC2s7--_XjvGQ",
    authDomain: "jul-wooh.firebaseapp.com",
    databaseURL: "https://jul-wooh.firebaseio.com",
    projectId: "jul-wooh",
    storageBucket: "jul-wooh.appspot.com",
    messagingSenderId: "379989790652"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/* for(var lukenummer = 1; lukenummer<=24; lukenummer++){

    db.collection("Julekalender").add({
        Luke: lukenummer
    });
} */

var pakkerE = document.querySelector('.pakker');


var ref = db.collection('Julekalender');

var query = ref.where('Luke', '==', 24,).where('Luke', '<=', 12);


query.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){
        pakkerE.innerHTML +=    "<div class='Luke'>" +
                                objekt[x].data().Luke +
                                "</div>";
    }

});

