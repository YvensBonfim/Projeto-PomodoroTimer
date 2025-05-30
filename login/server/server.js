require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database.js");
const path = require("path");

const app = express();
const PORT = 3000;
const SECRET_KEY = "seu_segredo_secreto"; // Troque por uma variável de ambiente

app.use(cors());
app.use(bodyParser.json());

// Configuração base para os caminhos
const basePath = path.join("C:", "Users", "Danilo", "Desktop", "pomodoro timer", "pomodoro");

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(basePath, "login", "public")));
app.use(express.static(path.join(basePath, "telainicial")));
app.use("/temas", express.static(path.join(basePath, "temas")));
app.use("/jsTimer", express.static(path.join(basePath, "jsTimer")));

// Rotas para arquivos HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(basePath, "login", "public", "index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(basePath, "login", "public", "register.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(basePath, "telainicial", "dashboard.html"));
});

// Rotas para temas
app.get("/temas/:tema/:arquivo", (req, res) => {
    const { tema, arquivo } = req.params;
    res.sendFile(path.join(basePath, "temas", tema, arquivo));
});

app.get("/temas/:tema/style.css", (req, res) => {
    const { tema } = req.params;
    res.sendFile(path.join(basePath, "temas", tema, "style.css"));
});

// Rota para arquivos CSS
app.get("/css/:arquivo", (req, res) => {
    const { arquivo } = req.params;
    res.sendFile(path.join(basePath, "login", "public", "css", arquivo));
});

// Cadastro de usuário
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (password.length < 7) {
        return res.status(400).json({ error: "A senha deve ter pelo menos 7 caracteres!" });
    }

    db.get("SELECT * FROM users WHERE username = ? OR email = ?", [username, email], (err, user) => {
        if (user) {
            return res.status(400).json({ error: "Usuário ou email já existe!" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword], (err) => {
            if (err) return res.status(400).json({ error: "Erro ao cadastrar usuário!" });
            res.json({ message: "Cadastro realizado com sucesso!" });
        });
    });
});

// Login de usuário
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: "Usuário ou senha inválidos!" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    });
});

// Servidor rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});