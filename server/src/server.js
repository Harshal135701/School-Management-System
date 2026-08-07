const app = require("./app");
const sequelize = require("./config/database");
require("dotenv").config();

// Import Models
require("./models/User");
require("./models/Student");
require("./models/Teacher");
require("./models/Homework");

const PORT = process.env.PORT || 5000;

const createAdmin = require("./utils/createAdmin");

sequelize
  .sync({ alter: true })
  .then(async () => {
    await createAdmin();

    console.log("✅ Database Synced");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });