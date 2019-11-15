const router = require("express").Router();
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");



// /auth/login
router
  .route("/login")
  .post(passport.authenticate('local', {successRedirect: "/", failureRedirect: "/login", failureFlash: true}))



module.exports = router;