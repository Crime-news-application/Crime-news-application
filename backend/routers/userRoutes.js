// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserProfile,
  verifyOtp,
  loginUser,
  updateUserRole,
  googleLogin,
  getUserPaymentDetails,
} = require("../controllers/userController");

// Create a new user
router.post("/", createUser);

// Login user
router.post("/login", loginUser);

// Google login
router.post("/google-login", googleLogin);

// Verify OTP
router.post("/verify-otp", verifyOtp);

// Get all users
router.get("/", getAllUsers);
router.patch("/:userId/role", updateUserRole);

// ✅ GET USER PROFILE (Protected)
router.get("/profile", authMiddleware, getUserProfile);
router.get("/gituserpayment", authMiddleware, getUserPaymentDetails);
// Edit user details
router.patch("/:id", editUser);

// Delete a user (soft delete)
router.delete("/:id", deleteUser);

module.exports = router;
