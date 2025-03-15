const express = require("express");
const router = express.Router();
const { getArticles  } = require("../controllers/articleController");

router.get("/get", getArticles);
// router.get("/top-5-articles", getTop5Articles);


module.exports = router;
