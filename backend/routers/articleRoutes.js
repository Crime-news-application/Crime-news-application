const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const upload = require("../config/multer"); // استدعاء إعدادات Multer

// رفع مقال جديد مع صورة رئيسية ووسائط متعددة
router.post(
  "/",
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "media", maxCount: 5 }, // يمكن رفع 5 صور إضافية
  ]),
  articleController.createArticle
);

// جلب كل المقالات
router.get("/", articleController.getArticles);

// جلب مقال واحد حسب الـ ID
router.get("/:id", articleController.getArticleById);

// تحديث المقال
router.put("/:id", articleController.updateArticle);

// حذف المقال
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
