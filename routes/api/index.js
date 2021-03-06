const router = require("express").Router();
const userRoutes = require("./users");
const reviewRoutes = require("./reviews")
const appointmentRoutes = require("./appointments");


router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/reviews/test", reviewRoutes);
module.exports = router;