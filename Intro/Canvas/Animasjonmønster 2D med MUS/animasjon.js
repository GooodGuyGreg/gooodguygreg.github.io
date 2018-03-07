var canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var fart = 0.05;
var temp = 100;
var musX = canvas.width/2;
var musY = canvas.height/2;


c.canvas.addEventListener('mousemove', function (event) {

    musX = event.clientX;
    musY = event.clientY;
    if(musX <= 20 || musX >= canvas.width-50 || musX >= canvas.width+50){
        musX = canvas.width/2;
        musY = canvas.height/2;
    }
    
});

function animate() {
    requestAnimationFrame(animate);


    c.fillStyle = 'rgba(0, 0, 0, 0.04)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.font = "30px Arial";


    temp = temp + fart;

    for (var i = 0; i < 10; i++) {
        var x = Math.tan(temp+i*temp/25)* 20*i + musX;
        var y = Math.sin(temp+i*temp/25)* 20*i + musY;
        var radius = 10;
        var r = Math.round(Math.random()*i*200);
        var g = 0;
        var b = Math.round(Math.random()*i*10)+100;
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI,);
        c.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', 1';
        c.fillStyle = 'rgba(' + r + ', ' + g + ',' + b + ',0.4)';
        c.fill();
        c.stroke();
    }
}
animate();