const bcrypt = require("bcrypt");
const User = require("../models/User");

const createAdmin = async () => {
  const admin = await User.findOne({
    where: { email: "admin@gmail.com" },
  });

  if (!admin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Default Admin Created");
  }
};

module.exports = createAdmin;