const canvas = document.getElementById("wave");
const w = canvas.getContext("2d");

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let t = 0;
let amplitude = 100;
let wavelength = 300;
let frequency = 1;
let speed = frequency * wavelength;

function drawWave() {
    w.clearRect(0, 0, canvas.width, canvas.height);
    w.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height / 2 + Math.sin((2 * Math.PI * x) / wavelength + t) * amplitude;
        w.lineTo(x, y);
    }
    w.stroke();
    t += frequency * 0.05;
}
function animate(){
    drawWave();
    requestAnimationFrame(animate);
}

animate();