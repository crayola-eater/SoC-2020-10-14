// import query
const { query } = require("../index");

// run query to make table
module.exports.createTable = async function createTable() {
  return await query(
    `CREATE TABLE IF NOT EXISTS jokes (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL
    );`
  );
};

if (require.main === module) {
  createTable();
}
