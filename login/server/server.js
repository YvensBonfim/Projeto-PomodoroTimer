require("dotenv").config();
const path    = require("path");
const express = require("express");
const bcrypt  = require("bcryptjs");
const jwt     = require("jsonwebtoken");
const cors    = require("cors");

// como database.js está na mesma pasta de server.js:
const pool    = require(path.join(__dirname, "database.js"));

const app     = express();
const PORT       = process.env.PORT || 3000;
const SECRET_KEY = process.env.JWT_SECRET || "troque_pra_seguro";

app.use(cors());
app.use(express.json());

// Caminhos relativos
const serverDir       = __dirname;                  // .../pomodoro/login/server
const loginDir        = path.resolve(serverDir, "..");      // .../pomodoro/login
const rootDir         = path.resolve(loginDir,  "..");      // .../pomodoro

const loginPublicDir  = path.join(loginDir,    "public");
const telaInicialDir  = path.join(rootDir,     "telainicial");
const temasDir        = path.join(rootDir,     "temas");
const jsTimerDir      = path.join(rootDir,     "jsTimer");
const cssPublicDir    = path.join(loginPublicDir, "css");

// Serve estáticos
app.use(express.static(loginPublicDir));
app.use(express.static(telaInicialDir));
app.use("/temas",   express.static(temasDir));
app.use("/jsTimer", express.static(jsTimerDir));
app.use("/css",     express.static(cssPublicDir));

// Rotas principais
app.get("/",        (req, res) => res.sendFile(path.join(loginPublicDir,  "index.html")));
app.get("/register",(req, res) => res.sendFile(path.join(loginPublicDir,  "register.html")));
app.get("/dashboard",(req,res) => res.sendFile(path.join(telaInicialDir,  "dashboard.html")));

// Rota dinâmica de temas
app.get("/temas/:tema/:arquivo", (req, res) => {
  const { tema, arquivo } = req.params;
  res.sendFile(path.join(temasDir, tema, arquivo));
});

// Cadastro de usuário
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (password.length < 7) {
        return res.status(400).json({ error: "A senha deve ter pelo menos 7 caracteres!" });
    }

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1 OR email = $2",
            [username, email]
        );

        if (result.rows.length > 0) {
            return res.status(400).json({ error: "Usuário ou email já existe!" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
            [username, email, hashedPassword]
        );

        res.json({ message: "Cadastro realizado com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao cadastrar usuário!" });
    }
});

// Login de usuário
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );

        const user = result.rows[0];

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: "Usuário ou senha inválidos!" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no login!" });
    }
});
// — suas rotas de API (register, login etc.) aqui — //

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
