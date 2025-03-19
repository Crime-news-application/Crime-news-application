const express = require("express");
const router = express.Router();
const { incrementVisit, getVisitCount } = require("../controllers/visitController");

// ✅ API لزيادة عدد الزيارات
router.post("/visit", incrementVisit);

// ✅ API لجلب عدد الزيارات
// router.get("/", getVisitCount);

module.exports = router;
