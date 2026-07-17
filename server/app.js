const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");



app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes); 
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TaskFlow Backend is running 🚀"
  });
});

module.exports = app;