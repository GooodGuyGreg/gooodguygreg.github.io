var canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Rektangler
c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(150, 200, 100, 100);
c.fillStyle = 'purple';
c.fillRect(200, 300, 100, 100);
c.fillStyle = 'orange';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'yellow';
c.fillRect(350, 200, 100, 100);
c.fillStyle = 'pink';
c.fillRect(400, 100, 100, 100);

//Linjer
c.beginPath();
c.moveTo(300, 400);
c.lineTo(450, 150);
c.lineTo(500, 400);
c.lineTo(300, 400);
c.strokeStyle = 'red';
c.fillStyle = 'rgba(0, 255, 0, 0.3)';
c.fill();
c.stroke();

// Sirkel (arc)
c.beginPath();
c.arc(300, 400, 100, 2*Math.PI, false);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 250, 0.2';
c.fill();
c.stroke();

// Mange sirkler

//Mønster
for(var i = 1; i<3; i++){
    c.beginPath();
    c.arc(1000, 400+i*5, 50+i*10, 2*Math.PI, false);
    c.strokeStyle = 'blue';
    c.stroke();
}

//Tilfeldig
    for (var i = 1; i < 100; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, 30, 2 * Math.PI, false);
        c.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', 1';
        c.fillStyle = 'rgba('+r+', '+g+','+b+',0.4)';
        c.fill();
        c.stroke();
    }


