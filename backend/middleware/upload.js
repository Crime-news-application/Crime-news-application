const multer = require("multer");
const path = require("path");

// Configure storage options for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists in your project root
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Unique filename with current timestamp
  },
});

const upload = multer({ storage });

module.exports = upload;
