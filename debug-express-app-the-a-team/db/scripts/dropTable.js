// import query
const { query } = require("../index");

// run query to drop table
module.exports.dropTable = async function dropTable() {
  return await query("DROP TABLE IF EXISTS jokes;");
};

if (require.main === module) {
  dropTable();
}
