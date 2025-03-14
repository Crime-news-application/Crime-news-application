//the library :
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
//the routes :
const articleRoutes = require("./routers/articleRoutes");






const app = express();

connectDB();

app.use(cors()); 
app.use(express.json()); 

//the paths of routes
app.use("/api/articles", articleRoutes);





const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});