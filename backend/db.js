import mysql from 'mysql2';

export const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gui0106', 
  database: 'crud_tenis', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('Conectado ao MySQL!'); 