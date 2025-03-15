const Article = require("../models/article");

const getArticles = async (req, res) => {
  try {
    const { category, sortBy } = req.query;

    const query =
      category && category !== "All" ? { categories: category } : {};

    let sortOption = {};
    switch (sortBy) {
      case "newest":
        sortOption = { publishDate: -1 };
        break;
      case "oldest":
        sortOption = { publishDate: 1 };
        break;
      case "most-viewed":
        sortOption = { views: -1 };
        break;
      case "most-liked":
        sortOption = { likes: -1 };
        break;
      default:
        sortOption = { publishDate: -1 };
    }

    const articles = await Article.find(query).sort(sortOption);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
};

const getArticlesById = async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    const { id } = req.params; // جلب الـ ID من الـ URL

    if (id) {
      // إذا كان هناك ID، جلب مقال واحد فقط
      const article = await Article.findById(id);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      return res.json(article);
    }

    // إذا لم يكن هناك ID، جلب كل المقالات مع الفلترة والفرز
    const query =
      category && category !== "All" ? { categories: category } : {};

    let sortOption = {};
    switch (sortBy) {
      case "newest":
        sortOption = { publishDate: -1 };
        break;
      case "oldest":
        sortOption = { publishDate: 1 };
        break;
      case "most-viewed":
        sortOption = { views: -1 };
        break;
      case "most-liked":
        sortOption = { likes: -1 };
        break;
      default:
        sortOption = { publishDate: -1 };
    }

    const articles = await Article.find(query).sort(sortOption);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
};

const acceptArticle = async (req, res) => {
  const { articleId } = req.body;

  try {
    const article = await Article.findByIdAndUpdate(
      articleId,
      { status: "Published" },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: "Error accepting article", error });
  }
};

const rejectArticle = async (req, res) => {
  const { articleId } = req.body;

  try {
    const article = await Article.findByIdAndUpdate(
      articleId,
      { status: "Rejected" },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: "Error rejecting article", error });
  }
};

module.exports = { getArticles, getArticlesById, acceptArticle, rejectArticle };
