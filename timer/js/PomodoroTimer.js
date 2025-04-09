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
        this.isStudying = true;
        this.isRunning = false;
        this.interval = null;
        this.pausedTime = 0;

        this.startPauseBtn.addEventListener('click', () => this.toggleTimer());
        this.resetBtn.addEventListener('click', () => this.resetTimer());
        
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.studyTime / 60);
        const seconds = this.studyTime % 60;
        this.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const totalTime = this.isStudying ? parseInt(this.studyTimeInput.value) * 60 : parseInt(this.breakTimeInput.value) * 60;
        const progress = ((totalTime - this.studyTime) / totalTime) * 283;
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
        this.pausedTime = this.studyTime;
    }

    toggleTimer() {
        if (this.isRunning) {
            this.pauseTimer();
        } else {
            this.studyTime = this.pausedTime || (this.isStudying ? parseInt(this.studyTimeInput.value) * 60 : parseInt(this.breakTimeInput.value) * 60);
            this.startTimer();
        }
    }

    updateTimer() {
        if (this.studyTime === 0) {
            clearInterval(this.interval);
            alert(this.isStudying ? 'Tempo de estudo acabou! Hora da pausa.' : 'Pausa acabou! Hora de estudar.');
            this.isStudying = !this.isStudying;
            this.studyTime = this.isStudying ? parseInt(this.studyTimeInput.value) * 60 : parseInt(this.breakTimeInput.value) * 60;
            this.startTimer();
        } else {
            this.studyTime--;
        }
        this.updateDisplay();
    }

    resetTimer() {
        clearInterval(this.interval);
        this.studyTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.pausedTime = 0;
        this.timerDisplay.textContent = '25:00';
        this.studyTimeInput.value = 25;
        this.breakTimeInput.value = 5;
        this.isStudying = true;
        this.isRunning = false;
        this.startPauseBtn.textContent = 'Iniciar';
        this.startPauseBtn.classList.remove('paused');
        this.donutProgress.style.strokeDashoffset = 283;
    }
}