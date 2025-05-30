const { Pool } = require("pg");

const pool = new Pool({
  user: 'mack',          // ou seu usuário
  host: 'pomodoromack.cmd2sg0y0jdx.us-east-1.rds.amazonaws.com',
  database: 'mackpomo',      // nome do banco criado
  password: 'GHFofo3578645',     // a senha que você definiu
  port: 5432,
  ssl: {
  rejectUnauthorized: false
}});

module.exports = pool;
