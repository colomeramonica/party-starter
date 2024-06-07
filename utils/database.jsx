const mysql = require('promise-mysql');
const fs = require('fs');

const createTcpPool = async config => {
  const dbConfig = {
    host: process.env.INSTANCE_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ...config,
  };
  return mysql.createPool(dbConfig);
};