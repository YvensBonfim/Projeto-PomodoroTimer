function register() {
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const password = document.getElementById("newPassword").value;

    // Verificando se os emails coincidem
    if (email !== confirmEmail) {
        alert("Os emails não coincidem. Por favor, confirme o seu email.");
        return;
    }

    // Validação do formato do email com expressão regular
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Verificando se a senha tem pelo menos 7 caracteres
    if (password.length < 7) {
        alert("A senha deve ter pelo menos 7 caracteres.");
        return;
    }

    // Envio da requisição para o servidor
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert(data.error); // Mostra erro se houver
        } else {
            alert(data.message); // Mostra sucesso
            window.location.href = "index.html";
        }
    })
    .catch(err => alert("Erro ao cadastrar!")); // Captura erros inesperados
}
