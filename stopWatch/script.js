let secondElapse = 0;
let interval = null;
const time = document.getElementById("time");


function padStart(value){
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondElapse / 60);
    const seconds = secondElapse % 60;
    time.innerText = `${padStart(minutes)}:${padStart(seconds)}`;
}


function timer() {
    secondElapse++;
    setTime()
}

function start() {
    if (interval) {
        stop()
    } 
    
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    secondElapse = 0;
    setTime()
}