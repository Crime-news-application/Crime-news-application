const Article = require("../models/article");
const jwt = require("jsonwebtoken");
const Comment = require("../models/comment");
require("dotenv").config();

const getArticles = async (req, res) => {
  try {
    const { category, sortBy } = req.query;

 const query = {
   status: "Published",
   ...(category && category !== "All" ? { categories: category } : {}),
 };
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


function getUserIdFromToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
    return decoded.userId; // Ensure this matches the field in your token payload
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

async function createArticle(req, res) {
  // Extract token from the Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const token = authHeader.split(" ")[1]; // Get the token after "Bearer "

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const authorId = getUserIdFromToken(token); // Decode the token to get the user ID

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: authorId,
      categories: req.body.categories,
      tags: req.body.tags,
      featuredImage: req.body.featuredImage,
      mediaSource: req.body.mediaSource,
      status: req.body.status || "Pending",
      location: req.body.location,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id; // Extract the article ID from the request parameters

    
    const article = await Article.findById(articleId); // Find the article by ID
   //كود بلال عشان تزيد المشاهدات
    await Article.findByIdAndUpdate(
     articleId,
     { $inc: { views: 1 } }, // زيادة عدد المشاهدات بمقدار 1
     { new: true } // إرجاع الوثيقة المحدثة
   );//هي نهاية كود المشاهدات
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(article); // Return the article
  } catch (error) {
    res.status(500).json({ message: "Error fetching article", error });
  }
};

const addCommentToArticle = async (req, res) => {
  try {
    const articleId = req.params.id; // Extract article ID from the URL
    const { text } = req.body; // Extract comment text from the request body

    // Extract token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const token = authHeader.split(" ")[1]; // Get the token after "Bearer "

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Decode the token to get the user ID (author of the comment)
    const authorId = getUserIdFromToken(token);

    // Find the article by ID
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Add the new comment to the comments array
    article.comments.push({
      text,
      author: authorId,
    });

    // Save the updated article
    const updatedArticle = await article.save();

    res.status(201).json({
      message: "Comment added successfully",
      article: updatedArticle,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

const getArticleComments = async (req, res) => {
  try {
    const articleId = req.params.id; // Extract article ID from the URL

    // Find the article and populate the author field in the comments array
    const article = await Article.findById(articleId).populate({
      path: "comments.author",
      select: "username email", // Include only the fields you need
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Return the comments with user details
    res.status(200).json({
      message: "Comments retrieved successfully",
      comments: article.comments,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error });
  }
};


const getArticleAuthorComments = async (req, res) => {
  try {
    // استخراج التوكن من الـ Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    // التحقق من التوكن واستخراج userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    console.log("✅ Decoded User ID from token:", userId);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // جلب جميع التعليقات التي كتبها المستخدم
    const comments = await Comment.find({ author: userId }).populate({
      path: "author",
      select: "username email",
    });

    res.status(200).json({
      message: "User comments fetched successfully",
      comments,
    });
  } catch (error) {
    console.error("❌ Error fetching user comments:", error);
    res.status(500).json({ message: "Error fetching user comments", error });
  }
};


module.exports = {
  getArticles,
  createArticle,
  getArticleById,
  addCommentToArticle,
  getArticleComments,
  getArticleAuthorComments
};
