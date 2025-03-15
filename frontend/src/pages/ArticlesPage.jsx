import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEye, FaHeart } from "react-icons/fa";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles", {
          params: {
            category: selectedCategory === "All" ? null : selectedCategory,
            sortBy: sortOption,
          },
        });
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [selectedCategory, sortOption]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] p-6">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-2">
          Crime News
        </h1>
        <p className="text-gray-600">
          Stay informed about the latest crime-related news and updates.
        </p>
      </header>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md transition duration-300 ${
            selectedCategory === "All"
              ? "bg-[var(--primary-color)] text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All Categories
        </button>
        {[
          "Murder",
          "Theft",
          "Fraud",
          "Cybercrime",
          "Kidnapping",
          "Awareness",
        ].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              selectedCategory === category
                ? "bg-[var(--primary-color)] text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-gray-600 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most-viewed">Most Viewed</option>
            <option value="most-liked">Most Liked</option>
          </select>
        </div>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article) => (
            <motion.div
              key={article._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Featured Image */}
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[var(--primary-color)] line-clamp-2">
                  {article.title}
                </h2>
                <div className="mt-2 flex justify-between items-center text-gray-600 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[var(--primary-color)]" />
                    {new Date(article.publishDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaEye className="text-[var(--primary-color)]" />
                    {article.views} Views
                  </span>
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-[var(--primary-color)]" />
                    {article.likes} Likes
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No articles found for this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-red-600 transition duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
