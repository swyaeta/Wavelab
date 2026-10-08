const canvas = document.getElementById("wave");
const w = canvas.getContext("2d");
const ainput = document.getElementById("ainput");
const finput = document.getElementById("finput");
const wlinput = document.getElementById("wlinput");


canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;


let t = 0;
let amplitude = 100;
let wavelength = 2;
let pixelsPerMeter = 100;
let frequency = 1;
let speed = frequency * wavelength;
let visualWavelength = wavelength * pixelsPerMeter;


function drawWave() {
    amplitude = Number(ainput.value);
    frequency = Number(finput.value);
    wavelength = Number (wlinput.value);
    visualWavelength = wavelength * pixelsPerMeter;
    speed = frequency*wavelength;
    
    w.clearRect(0, 0, canvas.width, canvas.height);
    w.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height / 2 + Math.sin((2 * Math.PI * x) / visualWavelength + t) * amplitude;
        w.lineTo(x, y);
    }
    w.stroke();
    t += speed* 0.05;
}


function animate(){
    drawWave();
    requestAnimationFrame(animate);
}

animate();