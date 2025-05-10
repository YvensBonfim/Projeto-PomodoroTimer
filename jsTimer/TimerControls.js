class TimerControls {
    constructor(startPauseBtn, resetBtn, studyTimeInput, breakTimeInput) {
        this.startPauseBtn = startPauseBtn;
        this.resetBtn = resetBtn;
        this.studyTimeInput = studyTimeInput;
        this.breakTimeInput = breakTimeInput;
    }

    setStartPauseHandler(handler) {
        this.startPauseBtn.addEventListener('click', handler);
    }

    setResetHandler(handler) {
        this.resetBtn.addEventListener('click', handler);
    }

    updateStartPauseButton(isRunning) {
        this.startPauseBtn.textContent = isRunning ? 'Pausar' : 'Iniciar'; // Altere 'Retomar' para 'Iniciar'
        this.startPauseBtn.classList.toggle('paused', !isRunning);
    }

    getStudyTime() {
        return parseInt(this.studyTimeInput.value) * 60;
    }

    getBreakTime() {
        return parseInt(this.breakTimeInput.value) * 60;
    }
}