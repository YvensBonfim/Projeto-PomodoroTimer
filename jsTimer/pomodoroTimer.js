class PomodoroTimer {
    constructor() {
        this.timerDisplay = new TimerDisplay(
            document.getElementById('timer'),
            document.querySelector('.donut-progress')
        );

        this.timerControls = new TimerControls(
            document.getElementById('start-pause-btn'),
            document.getElementById('reset-btn'),
            document.getElementById('study-time'),
            document.getElementById('break-time')
        );

        this.studyTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.isStudying = true;
        this.isRunning = false;
        this.interval = null;
        this.pausedTime = 0;

        this.timerControls.setStartPauseHandler(() => this.toggleTimer());
        this.timerControls.setResetHandler(() => this.resetTimer());

        this.updateDisplay();
    }

    updateDisplay() {
        const totalTime = this.isStudying ? this.timerControls.getStudyTime() : this.timerControls.getBreakTime();
        this.timerDisplay.updateDisplay(this.studyTime, totalTime);
    }

    startTimer() {
        this.isRunning = true;
        this.timerControls.updateStartPauseButton(true);
        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    pauseTimer() {
        this.isRunning = false;
        this.timerControls.updateStartPauseButton(false);
        clearInterval(this.interval);
        this.pausedTime = this.studyTime;
    }

    toggleTimer() {
        if (this.isRunning) {
            this.pauseTimer();
        } else {
            this.studyTime = this.pausedTime || (this.isStudying ? this.timerControls.getStudyTime() : this.timerControls.getBreakTime());
            this.startTimer();
        }
    }

    updateTimer() {
        if (this.studyTime === 0) {
            clearInterval(this.interval);
            alert(this.isStudying ? 'Tempo de estudo acabou! Hora da pausa.' : 'Pausa acabou! Hora de estudar.');
            this.isStudying = !this.isStudying;
            this.studyTime = this.isStudying ? this.timerControls.getStudyTime() : this.timerControls.getBreakTime();
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
        this.timerDisplay.updateDisplay(this.studyTime, 25 * 60);
        this.timerControls.updateStartPauseButton(false); // Atualiza o botão para "Iniciar"
        this.isStudying = true;
        this.isRunning = false;
    }
}