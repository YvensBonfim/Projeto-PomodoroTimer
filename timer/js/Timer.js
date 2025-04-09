class Timer {
    constructor(duration, displayElement, progressElement, onTimerEnd) {
        this.duration = duration;
        this.displayElement = displayElement;
        this.progressElement = progressElement;
        this.onTimerEnd = onTimerEnd; // Callback para quando o timer acabar
        this.isRunning = false;
        this.interval = null;
        this.pausedTime = 0;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => this.update(), 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.interval);
            this.pausedTime = this.duration;
        }
    }

    reset() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.duration = this.pausedTime || this.duration;
        this.updateDisplay();
    }

    update() {
        if (this.duration > 0) {
            this.duration--;
            this.updateDisplay();
        } else {
            this.pause();
            if (this.onTimerEnd) {
                this.onTimerEnd(); // Chama o callback quando o timer acabar
            }
        }
    }

    updateDisplay() {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration % 60;
        this.displayElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Correção do cálculo do progresso
        const totalTime = this.isStudying ? this.getStudyTime() : this.getBreakTime();
        const progress = ((totalTime - this.duration) / totalTime) * 283; // 283 é a circunferência do círculo
        this.progressElement.style.strokeDashoffset = 283 - progress;

        // Depuração
        console.log("Total Time:", totalTime);
        console.log("Duration:", this.duration);
        console.log("Progress Offset:", this.progressElement.style.strokeDashoffset);
    }
}