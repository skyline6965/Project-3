var router = require("express").Router();
var passport = require("passport");

router.post('/login',
  passport.authenticate('local', { successRedirect: '/auth/whatever',
                                   failureRedirect: '/auth/login',
                                   failureFlash: false })
);

router.get('/whatever', function(req, res){
    console.log(req);
    res.send("auth works!")
})
router.get('/login', function(req, res){
    console.log(req);
    res.send("auth works!")
})
module.exports = router;