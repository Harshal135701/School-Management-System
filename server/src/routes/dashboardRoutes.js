const express = require("express");
const router = express.Router();

const { getDashboard } = require("../controller/dashboardController");

router.get("/", getDashboard);

module.exports = router;