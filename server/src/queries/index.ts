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
    connectionString: process.env.DATABASE_URL,
};

module.exports = new Pool(process.env.NODE_ENV === 'production' ? prodDbConfig : localDbConfig);
