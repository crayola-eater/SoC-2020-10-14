const jokes = require("../model/jokes");

module.exports.getAllJokes = async (req, res) => {
  res.json({
    success: true,
    payload: await jokes.getAllJokes(),
  });
};

module.exports.getJokeById = async (req, res) => {
  res.json({
    success: true,
    payload: await jokes.getJokeById(req.params.id),
  });
};

module.exports.addJoke = async (req, res) => {
  res.json({
    success: true,
    payload: await jokes.addJoke(req.body.joke),
  });
};

module.exports.updateJokeById = async (req, res) => {
  res.json({
    success: true,
    payload: await jokes.updateJokeById(req.params.id, req.body.joke),
  });
};

module.exports.deleteJokeById = async (req, res) => {
  res.json({
    success: true,
    payload: await jokes.deleteJokeById(req.params.id),
  });
};
