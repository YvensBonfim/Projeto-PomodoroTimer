# ⏳ Pomodoro Timer

Um temporizador Pomodoro interativo e estilizado, feito com HTML, CSS e JavaScript. Ideal para quem deseja gerenciar melhor o tempo de foco e pausa durante os estudos ou o trabalho.

## 🧠 O que é Pomodoro?

A Técnica Pomodoro é um método de gerenciamento de tempo que alterna períodos de foco com pausas curtas, ajudando a manter a produtividade e evitar a fadiga mental.

---

## 🚀 Funcionalidades

- Temporizador visual em formato de anel circular com animação de progresso.
- Definição personalizada dos tempos de foco e pausa.
- Botões para iniciar/pausar e resetar o temporizador.
- Alerta automático ao final de cada sessão.
-temas visuais com musicas de fundo para ajudar no foco

---

## 🗂 Estrutura dos Arquivos

```
pomodoro/
├── jsTimer/
│   ├── main.js
│   ├── pomodorotimer.js
│   ├── soundlogic.js
│   ├── timercontrol.js
│   └── timerdisplay.js
├── login/
│   ├── public/
│   │   ├── index.html
│   │   ├── register.html
│   │   └── script.js
│   └── server/
│       ├── database.js
│       └── server.js
├── telainicial/
│   └── dashboard.html
└── temas/
    ├── temamanha/
    ├── tematarde/
    └── temanoite/
```

---

## 💻 Como Rodar Localmente

1. Faça o download ou clone este repositório.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador preferido.

---

---

## 💻 Como acessar:

https://pomodorotimer12.netlify.app/

---



## 🛠 Tecnologias Usadas

- HTML5
- CSS3 (com Glassmorphism)
- JavaScript puro (sem frameworks)
-postgree

---

## 📌 Observações

-Está é a primeira versão da aplicação, funções extras, demais telas e funcionalidades ainda serão implementadas
- A interface é totalmente responsiva para desktop. Para mobile, ajustes adicionais ainda serão adicionados

---




## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 ou superior)
- NPM ou Yarn
- Git (opcional)

## 🚀 Começando

🛠️ Instalação Passo a Passo
1. Clone o repositório
bash
git clone https://github.com/seu-usuario/pomododro.git
cd pomododro
2. Instale as dependências
Navegue até a pasta do servidor e instale as dependências:

bash
cd login/server
npm install express bcryptjs jsonwebtoken cors body-parser dotenv pg
3. Configure o banco de dados
Inicie o PostgreSQL

Execute os seguintes comandos SQL:

sql
CREATE DATABASE postgres;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
4. Configure as variáveis de ambiente
Crie um arquivo .env na pasta login/server com:

env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=sua_senha
DB_PORT=5432
SECRET_KEY=seu_segredo_secreto
▶️ Executando a aplicação
bash
node server.js
Acesse: http://localhost:3000
## 🏗️ Estrutura do Projeto

```
pomodoro/
├── jsTimer/              # Lógica do temporizador Pomodoro
│   ├── main.js           # Ponto de entrada
│   ├── pomodorotimer.js  # Classe principal do timer
│   ├── soundlogic.js     # Controle de áudio
│   ├── timercontrol.js   # Controles do timer
│   └── timerdisplay.js   # Exibição do timer
├── login/
│   ├── public/           # Front-end
│   │   ├── index.html    # Página de login
│   │   ├── register.html # Página de registro
│   │   └── script.js     # Lógica do front-end
│   └── server/           # Back-end
│       ├── database.js   # Conexão com PostgreSQL
│       └── server.js     # Servidor principal
├── telainicial/          # Dashboard após login
│   └── dashboard.html    
└── temas/                # Temas personalizados
    ├── temamanha/        # Tema manhã
    ├── tematarde/        # Tema tarde
    └── temanoite/        # Tema noite
```

## 🔧 Funcionalidades

- ⏱️ Temporizador Pomodoro configurável
  - Tempo de estudo e pausa personalizáveis
  - Barra de progresso visual
  - Controles de iniciar/pausar/resetar
- 🔐 Sistema de autenticação
  - Cadastro de usuários
  - Login com JWT
  - Validação de formulários
- 🎨 Temas personalizáveis
- 🔊 Controle de áudio

## 🌐 Rotas Principais

| Rota | Descrição |
|------|-----------|
| `/` | Página de login |
| `/register` | Página de registro |
| `/dashboard` | Dashboard após login |
| `/temas/:tema/:arquivo` | Acessa temas disponíveis |
| `/jsTimer` | Recursos do temporizador |

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✉️ Contato

Seu Nome - [@seu_twitter](https://twitter.com/seu_twitter) - seu-email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/pomododro](https://github.com/seu-usuario/pomododro)
