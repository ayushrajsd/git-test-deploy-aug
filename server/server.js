const express = require("express");
const app = express();
require("dotenv").config(); // Load environment variables
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

connectDB();

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(8082, () => {
  console.log("Server is running on port 8082");
});
