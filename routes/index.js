const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth")

// API Routes
router.use("/api", apiRoutes);

// User Auth Routes
router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log(req);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
