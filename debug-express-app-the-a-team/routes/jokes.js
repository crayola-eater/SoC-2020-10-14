var express = require("express");
var router = express.Router();

const booksController = require("../controller/books");

router.get("/:id", booksController.getJokeById);
router.get("/", booksController.getAllJokes);
router.post("/", booksController.addJoke);
router.put("/:id", booksController.updateJokeById);
router.delete("/:id", booksController.deleteJokeById);
router.patch("/:id");

module.exports = router;
