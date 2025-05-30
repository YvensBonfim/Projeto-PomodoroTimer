function register() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
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
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error); // Exibe mensagem de erro se houver
    } else {
      localStorage.setItem("token", data.token); // Salva o token
      window.location.href = "/dashboard.html"; // Redireciona para a área protegida
    }
  })
  .catch(err => alert("Erro ao fazer login!")); // Captura erros inesperados
}
