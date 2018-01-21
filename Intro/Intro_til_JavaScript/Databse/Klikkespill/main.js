firebase.initializeApp({
    apiKey: "AIzaSyBrr7AjmnJyy1jP351al1_NGo1Vc7qTZrs",
    authDomain: "klikkespill-e7fd7.firebaseapp.com",
    projectId: "klikkespill-e7fd7"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var klikkverdi = 0;
var klikkverdiE = document.querySelector(".klikkverdi");
var navnE = document.querySelector(".navn");
var poenglisteE = document.querySelector(".poengliste");

var ref = db.collection("brukere");
var orderQuery = ref.orderBy("poeng", "desc").limit(20);

orderQuery.onSnapshot(function(data){
    poenglisteE.innerHTML = "";
    var objekt = data.docs;
    for(var x in objekt)
        poenglisteE.innerHTML += "<li>" + objekt[x].data().navn + ":  " +  objekt[x].data().poeng + "</li>";
});

function klikk() {
    //øker klikkverdien med 1
    klikkverdi++;
    klikkverdiE.innerHTML = klikkverdi;
}

function start() {
    klikkverdi=0;
    klikkverdiE.innerHTML = klikkverdi;

    setTimeout(function () {
        db.collection("brukere").add({
            navn: navnE.value,
            poeng: klikkverdi
        });
        alert("Du fikk " + klikkverdi + " poeng!" )

    },4000);
}