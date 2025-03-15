const express = require("express");
const router = express.Router();
const {
  getArticles,
  createArticle,
  getArticleById,
  addCommentToArticle,
  getArticleComments,
} = require("../controllers/articleController");

router.get("/get", getArticles);
router.post("/add-articles", createArticle);
router.get("/get-articles/:id", getArticleById);
router.post("/addComents-articles/:id/comments", addCommentToArticle);
router.get("/getComment-articles/:id/comments", getArticleComments);

module.exports = router;
