const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


const app = express();


app.use(cors()); // السماح بالوصول من مختلف المصادر
app.use(express.json()); // لقراءة البيانات بتنسيق JSON من الطلبات

// استيراد المسارات
const userRouter = require("./routers/userRouter");

// ربط المسارات
app.use("/api/users", userRouter);

// استماع على المنفذ المحدد
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
