const { Pool } = require('pg');

// local db config
const localDbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'url-shortener',
    password: 'toor',
    port: 5432,
};

// prod db config
const prodDbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
};

module.exports = new Pool(process.env.NODE_ENV === 'production' ? prodDbConfig : localDbConfig);
