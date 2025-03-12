const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["journalist", "reader", "admin"],
      required: true,
    },
    profilePicture: { type: String }, // رابط الصورة المرفوعة
    savedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
    readingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }], // ✅ مقالات الصحفي
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
