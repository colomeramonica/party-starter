const mysql = require('mysql');
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.CLOUD_SQL_PUBLIC_IP,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err: any) => {
  if (err) {
    console.error('Erro ao conectar ao Cloud SQL:', err);
    return;
  }
  console.log('Conectado ao Cloud SQL com sucesso!');
});

export {connection};