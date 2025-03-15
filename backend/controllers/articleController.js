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


// const getTop5Articles = async (req, res) => {
//   try {
//     const articles = await Article.find().sort({ views: -1 }).limit(5);
//     res.json(articles);
//   } catch (error) {
//     console.error('Error fetching top 5 articles:', error);
//     res.status(500).json({ message: 'Error fetching top 5 articles', error });
//   }
// };


module.exports = { getArticles };
