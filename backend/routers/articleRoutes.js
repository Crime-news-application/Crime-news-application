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
<<<<<<< HEAD
  getSavedArticles
  
=======
  getTop5Articles,
>>>>>>> 6cc78673743facc73ec4830ba53d83b2d819c1e9
} = require("../controllers/articleController");

router.get("/getA", getArticles);
router.get("/get", getArticlesJenan);
router.get("/get/:id", getArticlesByIdjenan);
router.put("/accept", acceptArticle);
router.put("/reject", rejectArticle);

router.get("/top-5-articles", getTop5Articles);

router.post("/add-articles", createArticle);
router.get("/get-articles/:id", getArticleById);
router.post("/addComents-articles/:id/comments", addCommentToArticle);
router.get("/getComment-articles/:id/comments", getArticleComments);
router.get("/user-comments", getArticleAuthorComments);
router.get("/saved-articles", getSavedArticles);

module.exports = router;
