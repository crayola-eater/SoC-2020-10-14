const { createTable } = require("./createTable");
const { dropTable } = require("./droptable");

const reinitialiseTable = async function reinitialiseTable() {
  await dropTable();
  await createTable();
};

if (require.main === module) {
  reinitialiseTable();
}
