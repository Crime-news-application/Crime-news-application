const express = require("express");
const router = express.Router();
// router.get("/top-5-articles", getTop5Articles);


const {
  getArticles,
  createArticle,
  getArticleById,
  addCommentToArticle,
  getArticleComments,
  getArticleAuthorComments
} = require("../controllers/articleController");

router.get("/get", getArticles);
router.post("/add-articles", createArticle);
router.get("/get-articles/:id", getArticleById);
router.post("/addComents-articles/:id/comments", addCommentToArticle);
router.get("/getComment-articles/:id/comments", getArticleComments);
router.get("/user-comments", getArticleAuthorComments);
module.exports = router;
