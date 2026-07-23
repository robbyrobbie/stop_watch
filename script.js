let timerRef = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let [hours, minutes, seconds] = [0, 0, 0];
let intervalId = null;

function displayTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerRef.innerHTML = `${h}:${m}:${s}`;
}

startBtn.addEventListener('click', () => {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(displayTimer, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    [hours, minutes, seconds] = [0, 0, 0];
    timerRef.innerHTML = "00:00:00";
}); 