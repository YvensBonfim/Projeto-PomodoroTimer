const audio = document.getElementById('background-music');
        const audioToggle = document.getElementById('audio-toggle');

        // Iniciar o áudio após a primeira interação do usuário
        function startAudio() {
            if (audio.paused) {
                audio.play().then(() => {
                    audioToggle.textContent = '🔊'; // Ícone de áudio ligado
                }).catch(error => {
                    console.error("Erro ao reproduzir o áudio:", error);
                });
            }
        }

        // Função para alternar entre mutar e desmutar
        function toggleAudio() {
            if (audio.muted) {
                audio.muted = false;
                audioToggle.textContent = '🔊'; // Ícone de áudio ligado
            } else {
                audio.muted = true;
                audioToggle.textContent = '🔇'; // Ícone de áudio desligado
            }
        }

        // Adicionar evento de clique ao botão de áudio
        audioToggle.addEventListener('click', toggleAudio);

        // Iniciar o áudio após a primeira interação do usuário
        document.addEventListener('click', startAudio, { once: true });