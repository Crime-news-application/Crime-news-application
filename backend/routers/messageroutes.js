const express = require("express");
const {
  getMessages,
  addMessages,
} = require("../controllers/messagecontrollers");

const router = express.Router();

// ✅ Route لإضافة رسالة جديدة
router.post("/message", addMessages);

// ✅ Route لجلب جميع الرسائل
router.get("/message", getMessages);

module.exports = router;
