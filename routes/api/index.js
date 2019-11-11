const router = require("express").Router();
const userRoutes = require("./users");
const reviewRoutes = require("./reviews")


router.use("/users", userRoutes);
module.exports = router;