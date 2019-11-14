const router = require("express").Router();
const passport = require("passport");

router.route("/")
  .post((req, res, next) => {
    passport.authenticate('local');
  })