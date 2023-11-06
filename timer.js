const timerElement = document.getElementById('timer');
let timeLeft = 1.5 * 60;
let timerInterval;

const saveDrawing = () => {
    const link = document.createElement("a");
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
}

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        saveDrawing();
    }
    timeLeft--;
}

window.addEventListener('load', () => {
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
});
