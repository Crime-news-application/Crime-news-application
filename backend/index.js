const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const subscriptionRoutes = require("./routers/subscriptionRoutes");
const paymentRoutes = require("./routers/paymentRoutes");

const app = express();

connectDB();

app.use(cors()); 
app.use(express.json()); 



app.use("/api", subscriptionRoutes);
app.use("/api", paymentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});