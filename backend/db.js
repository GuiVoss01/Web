import mysql from 'mysql2';

export const db = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'Gui0106',
  database: 'crud',

});
