const express = require("express");
const router = express.Router();
<<<<<<< HEAD
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

=======
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
>>>>>>> 39738652b38e1cb876ac208f5b8fa85951cf189a
module.exports = router;
