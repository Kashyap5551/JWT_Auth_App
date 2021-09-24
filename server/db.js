const Pool = require("pg").Pool

const pol = new Pool({
    user: "postgres",
    password: "Sunny5551",
    host: "localhost",
    port: 5432,
    database: "jwt_auth"
});

module.exports = pool;