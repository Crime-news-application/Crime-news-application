const express = require("express");
const { getSavedArticles } = require("../controllers/savedArticlesController");

const router = express.Router();

router.get("/:userId/saved-articles", getSavedArticles);

module.exports = router;
