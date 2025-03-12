const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();



const app = express();

connectDB();

app.use(cors()); 
app.use(express.json()); 


<<<<<<< HEAD
const userRouter = require("./routers/userRouter");


app.use("/api/users", userRouter);
=======
>>>>>>> 576aa232c7d87e0c61e12f3f9a5ba0c8ef79f397


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});