const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticlesById,
  acceptArticle,
  rejectArticle,
} = require("../controllers/articleController");

router.get("/get", getArticles);
router.get("/get/:id", getArticlesById);
router.put("/accept", acceptArticle);
router.put("/reject", rejectArticle);

module.exports = router;
