// db config
const { Pool } = require("pg");

const pool = new Pool({
  // pg will automatically grab credentials from .env
  // hence, we don't include here.
  ssl: {
    rejectUnauthorized: false,
  },
});

// export query function for use in app
module.exports.query = pool.query.bind(pool);
