var canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function animate() {
    requestAnimationFrame(animate);
      c.fillStyle = 'rgba(0, 0, 0, 0.25)';
   // c.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 1; i < 100; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var r = Math.round(Math.random() * 1);
        var g = Math.round(Math.random() * 1);
        var b = Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, 15, 1.5 * Math.PI, false);
        c.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', 1';
        c.fillStyle = 'rgba(' + r + ', ' + g + ',' + b + ',0.4)';
        c.fill();
        c.stroke();
    }
}
animate();