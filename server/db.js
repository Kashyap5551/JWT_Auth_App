const Pool = require("pg").Pool

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Sunny5121998",
    port: 5432,
    database: "jwt_auth"
});

module.exports = pool;