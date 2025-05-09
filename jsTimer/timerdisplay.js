class TimerDisplay {
    constructor(timerDisplayElement, donutProgressElement) {
        this.timerDisplay = timerDisplayElement;
        this.donutProgress = donutProgressElement;
    }

    updateDisplay(timeInSeconds, totalTime) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        this.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const progress = ((totalTime - timeInSeconds) / totalTime) * 283;
        this.donutProgress.style.strokeDashoffset = 283 - progress;
    }
}