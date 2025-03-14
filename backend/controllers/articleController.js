const Article = require("../models/Article");

// إنشاء مقال جديد
const createArticle = async (req, res) => {
  try {
    const {
      title,
      content, // البيانات التفصيلية الجديدة
      author,
      categories,
      tags,
      location,
    } = req.body;

    // التأكد من وجود الصور المرفوعة
    const featuredImage = req.files["featuredImage"]
      ? `/uploads/${req.files["featuredImage"][0].filename}`
      : null;

    const media = req.files["media"]
      ? req.files["media"].map((file) => `/uploads/${file.filename}`)
      : [];

    const newArticle = new Article({
      title,
      content: { ...content }, // حفظ كـ Embedded Document
      author,
      categories,
      tags,
      featuredImage,
      media,
      location,
    });

    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error });
  }
};

// جلب كل المقالات مع التصفية والترتيب
const getArticles = async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let query = {};
    if (category) query.categories = category;

    let articles = Article.find(query).populate("author comments");

    // الترتيب حسب الطلب
    if (sortBy === "newest") articles = articles.sort({ publishDate: -1 });
    if (sortBy === "oldest") articles = articles.sort({ publishDate: 1 });
    if (sortBy === "most-viewed") articles = articles.sort({ views: -1 });
    if (sortBy === "most-liked") articles = articles.sort({ likes: -1 });

    const result = await articles.exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
};

// جلب مقال واحد مع التفاصيل
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate(
      "author comments"
    );
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Error fetching article", error });
  }
};

// تحديث المقال
const updateArticle = async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.body.content) {
      updatedData.content = { ...req.body.content }; // تحديث الـ Embedded Document
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};

// حذف المقال
const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
