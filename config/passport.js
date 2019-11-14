const passport = require("passport");
const db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var isAuthenticated = require("./middleware/isAuthenticated");

passport.use(new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done) {
    db.User.find({ username: username, password: password }).then((user => {
      if (!user) {
        return done(null, false, { message: 'incorrect username' });
      } else if (!user.checkPassword(password)) {
        return done(null, false, { message: 'incorrect password' });
      }
      return done(null, user);
    })
    // .catch(err => {console.log(err)})
    )
  }
))

passport.serializeUser(function(user, callback){
  callback(null, user);
})

passport.deserializeUser(function(obj, callback){
  callback(null, obj)
})

module.exports = passport;