const { query } = require("../db");

module.exports.getAllJokes = async () => {
  const result = await query("SELECT * FROM jokes;");
  return result.rows;
};

module.exports.getJokeById = async (id) => {
  const result = await query("SELECT * FROM jokes WHERE id = $1;", [id]);
  return result.rows[0];
};

module.exports.addJoke = async (joke) => {
  const result = await query(
    "INSERT INTO jokes (text) VALUES ($1) RETURNING id;",
    [joke]
  );
  return result.rows[0].id;
};

module.exports.updateJokeById = async (id, newJoke) => {
  const result = await query(
    "UPDATE jokes SET text = $1 WHERE id = $2 RETURNING *;",
    [newJoke, id]
  );
  return result.rows[0];
};

module.exports.deleteJokeById = async (id) => {
  const result = await query("DELETE FROM jokes WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return result.rows[0];
};
