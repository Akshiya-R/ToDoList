const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'perntodo',
    password: 'aks4501HI',
    port: 5432
});

module.exports = pool;