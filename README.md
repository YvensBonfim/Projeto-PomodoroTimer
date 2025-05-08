

# ⏳ Pomododro - Pomodoro Timer com Autenticação

![Pomodoro Technique](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pomodoro_Technique_logo.svg/1200px-Pomodoro_Technique_logo.svg.png)

Um temporizador Pomodoro interativo com sistema de autenticação, temas personalizáveis e músicas de fundo. Ideal para gerenciar períodos de foco e descanso com estilo.

## 🧠 O que é Pomodoro?

A Técnica Pomodoro é um método de gerenciamento de tempo que alterna períodos de foco (25 minutos) com pausas curtas (5 minutos), aumentando a produtividade e reduzindo a fadiga mental.

## 🚀 Funcionalidades Principais

- ⏱️ **Temporizador visual** com animação circular de progresso
- 🎨 **Temas personalizáveis** (manhã, tarde e noite)
- 🎵 **Músicas de fundo** para melhor concentração
- 🔐 **Sistema de autenticação** com cadastro e login
- ⚙️ **Configuração flexível** de tempos de foco e pausa
- 🔔 **Notificações** ao final de cada sessão

## 🛠 Tecnologias Utilizadas

- **Front-end**: HTML5, CSS3 (Glassmorphism), JavaScript
- **Back-end**: Node.js, Express
- **Banco de dados**: PostgreSQL
- **Autenticação**: JWT (JSON Web Tokens)

## 🗂 Estrutura do Projeto

```
pomodoro/
├── jsTimer/              # Lógica do temporizador
│   ├── main.js           # Ponto de entrada
│   ├── pomodorotimer.js  # Classe principal
│   ├── soundlogic.js     # Controle de áudio
│   ├── timercontrol.js   # Controles do timer
│   └── timerdisplay.js   # Exibição visual
├── login/                # Sistema de autenticação
│   ├── public/           # Páginas front-end
│   └── server/           # Back-end (Node.js)
├── telainicial/          # Dashboard pós-login
└── temas/                # Temas personalizados
    ├── temamanha/        # Tema claro
    ├── tematarde/        # Tema intermediário  
    └── temanoite/        # Tema escuro
```

## 💻 Como Rodar Localmente

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 ou superior)
- NPM ou Yarn
- Git (opcional)

### 🛠️ Instalação Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/pomododro.git
   cd pomododro
   ```

2. **Instale as dependências**
   ```bash
   cd login/server
   npm install express bcryptjs jsonwebtoken cors body-parser dotenv pg
   ```

3. **Configure o banco de dados**
   - Inicie o serviço do PostgreSQL
   - Execute os seguintes comandos SQL:
     ```sql
     CREATE DATABASE postgres;
     
     CREATE TABLE users (
         id SERIAL PRIMARY KEY,
         username VARCHAR(50) UNIQUE NOT NULL,
         email VARCHAR(100) UNIQUE NOT NULL,
         password VARCHAR(100) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

4. **Configure as variáveis de ambiente**
   - Crie um arquivo `.env` na pasta `login/server` com:
     ```env
     DB_USER=postgres
     DB_HOST=localhost
     DB_NAME=postgres
     DB_PASSWORD=sua_senha
     DB_PORT=5432
     SECRET_KEY=seu_segredo_secreto
     ```

5. **Inicie o servidor**
   ```bash
   node server.js
   ```

6. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🔍 Solução de Problemas Comuns

1. **Erro de conexão com PostgreSQL**:
   - Verifique se o serviço está rodando
   - Confira as credenciais no arquivo `.env`
   - Teste a conexão manualmente com `psql -U postgres`

2. **Dependências faltando**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Porta em uso**:
   - Altere a porta no arquivo `server.js` (linha `const PORT = 3000`)

4. **module not found**:

mude o caminho no arquivo server.js para o disco local onde está baixado a aplicação 

## 🌐 Rotas Principais

| Rota | Descrição |
|------|-----------|
| `/` | Página de login |
| `/register` | Página de registro |
| `/dashboard` | Dashboard após login |
| `/temas/:tema/:arquivo` | Acessa temas disponíveis |
| `/jsTimer` | Recursos do temporizador |

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📌 Observações



## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.




Repositório: [github.com/seu-usuario/pomododro]
