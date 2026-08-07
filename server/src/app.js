const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const homeworkRoutes = require("./routes/homeworkRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes); 
app.use("/api/homework", homeworkRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/uploads", express.static("src/uploads")); 

app.get("/", (req, res) => {
  res.json({ message: "School Management API Running" });
});

module.exports = app;