const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'url-shortener',
    password: 'toor',
    port: 5432,
});
