const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();



const app = express();

connectDB();

app.use(cors()); // السماح بالوصول من مختلف المصادر
app.use(express.json()); // لقراءة البيانات بتنسيق JSON من الطلبات


// استماع على المنفذ المحدد
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});