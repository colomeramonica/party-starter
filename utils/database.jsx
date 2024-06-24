const mysql = require('mysql');
const fs = require('fs');

return connection = {
  host: process.env.INSTANCE_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ...config,
};

export default connection