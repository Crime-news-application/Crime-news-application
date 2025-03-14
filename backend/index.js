const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // تحميل المتغيرات البيئية

const connectDB = require("./config/db");
const messageroutes = require("./routers/messageroutes");

const app = express();

// الاتصال بقاعدة البيانات
connectDB();

app.use(cors());
app.use(express.json());
app.use("/app", messageroutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
