const passport = require("passport");
const db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var isAuthenticated = require("./middleware/isAuthenticated");


function getUser(username){
  return db.User.find({ username: username });
}

passport.use(new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done) {
    getUser(username).then(users => {
      if(users.length === 0) {
        return done(null, false, { message: 'incorrect username' });
      } else if (!users[0].checkPassword(password)) {
        return done(null, false, { message: 'incorrect password' });
      }
      return done(null, users[0]);
      })
    })
    // .catch(err => {console.log(err)})
  )

passport.serializeUser(function(user, callback){
  callback(null, user);
})

passport.deserializeUser(function(obj, callback){
  callback(null, obj)
})

module.exports = passport;