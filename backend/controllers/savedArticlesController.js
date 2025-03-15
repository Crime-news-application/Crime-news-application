const User = require("../models/user");

exports.getSavedArticles = async (req, res) => {
  try {
    const userId = req.params.userId; // أخذ ID المستخدم من الرابط

    const user = await User.findById(userId).populate("savedArticles");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ savedArticles: user.savedArticles });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
