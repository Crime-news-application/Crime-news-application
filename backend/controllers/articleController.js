const Article = require("../models/Article");

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { title, content, author, categories, tags, location } = req.body;

    // التحقق من وجود صور مرفوعة
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : null;
    const media = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    const newArticle = new Article({
      title,
      content,
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

// Get all articles with filters
const getArticles = async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let query = {};
    if (category) query.categories = category;

    let articles = Article.find(query);

    // Sorting
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

// Get a single article by ID
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

// Update an article
const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};

// Delete an article
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
