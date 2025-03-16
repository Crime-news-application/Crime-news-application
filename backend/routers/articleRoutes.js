const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticlesByIdjenan,
  acceptArticle,
  rejectArticle,
  createArticle,
  getArticleById,
  addCommentToArticle,
  getArticleComments,
  getArticleAuthorComments,
  getArticlesJenan,
} = require("../controllers/articleController");

router.get("/getA", getArticles);
router.get("/get", getArticlesJenan);
router.get("/get/:id", getArticlesByIdjenan);
router.put("/accept", acceptArticle);
router.put("/reject", rejectArticle);

// router.get("/top-5-articles", getTop5Articles);

router.post("/add-articles", createArticle);
router.get("/get-articles/:id", getArticleById);
router.post("/addComents-articles/:id/comments", addCommentToArticle);
router.get("/getComment-articles/:id/comments", getArticleComments);
router.get("/user-comments", getArticleAuthorComments);
module.exports = router;
