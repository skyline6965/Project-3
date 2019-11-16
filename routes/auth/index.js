const router = require("express").Router();
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

// /auth/login
router
  .route("/login")
  .post(passport.authenticate('local', {successRedirect: "/", failureRedirect: "/login", failureFlash: true}))
  
  

router
  .route('/logout')
  .get(function(req,res){
    req.logout();
    req.session.destroy();
    return res.redirect('/');
  })

router
  .route("/online")
  .get(isLoggedIn, function(req,res){
    res.redirect("/calendar")
  });

module.exports = router;