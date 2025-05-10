class PomodoroTimer {
    constructor() {
        this.timerDisplay = document.getElementById('timer');
        this.studyTimeInput = document.getElementById('study-time');
        this.breakTimeInput = document.getElementById('break-time');
        this.startPauseBtn = document.getElementById('start-pause-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.donutProgress = document.querySelector('.donut-progress');

        this.studyTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.currentTime = this.studyTime;
        this.isStudying = true;
        this.isRunning = false;
        this.interval = null;
        this.pausedTime = 0;

        this.startPauseBtn.addEventListener('click', () => this.toggleTimer());
        this.resetBtn.addEventListener('click', () => this.resetTimer());

        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime % 60;
        this.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const totalTime = this.isStudying ? parseInt(this.studyTimeInput.value) * 60 : parseInt(this.breakTimeInput.value) * 60;
        const progress = ((totalTime - this.currentTime) / totalTime) * 283;
        this.donutProgress.style.strokeDashoffset = 283 - progress;
    }

    startTimer() {
        this.isRunning = true;
        this.startPauseBtn.textContent = 'Pausar';
        this.startPauseBtn.classList.remove('paused');
        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    pauseTimer() {
        this.isRunning = false;
        this.startPauseBtn.textContent = 'Retomar';
        this.startPauseBtn.classList.add('paused');
        clearInterval(this.interval);
        this.pausedTime = this.currentTime;
    }

    toggleTimer() {
        if (this.isRunning) {
            this.pauseTimer();
        } else {
            const studyTime = parseInt(this.studyTimeInput.value);
            const breakTime = parseInt(this.breakTimeInput.value);

            if (!studyTime || !breakTime || isNaN(studyTime) || isNaN(breakTime)) {
                alert("Por favor, defina um tempo correto antes de iniciar!");
                return;
            }

            this.currentTime = this.pausedTime || (this.isStudying ? studyTime * 60 : breakTime * 60);
            this.startTimer();
        }
    }

    updateTimer() {
        if (this.currentTime === 0) {
            clearInterval(this.interval);
            alert(this.isStudying ? 'Tempo de estudo acabou! Hora da pausa.' : 'Pausa acabou! Hora de estudar.');
            this.isStudying = !this.isStudying;
            const time = this.isStudying ? parseInt(this.studyTimeInput.value) : parseInt(this.breakTimeInput.value);
            this.currentTime = time * 60;
            this.startTimer();
        } else {
            this.currentTime--;
        }
        this.updateDisplay();
    }

    resetTimer() {
        clearInterval(this.interval);
        this.studyTimeInput.value = 25;
        this.breakTimeInput.value = 5;
        this.studyTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.currentTime = this.studyTime;
        this.pausedTime = 0;
        this.isStudying = true;
        this.isRunning = false;
        this.timerDisplay.textContent = '25:00';
        this.startPauseBtn.textContent = 'Iniciar';
        this.startPauseBtn.classList.remove('paused');
        this.donutProgress.style.strokeDashoffset = 283;
    }
}
