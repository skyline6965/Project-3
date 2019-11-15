const passport = require("passport");
const db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var isAuthenticated = require("./middleware/isAuthenticated");


function getUser(username){
  let user = await db.User.find({ username: username });
  return user
}

passport.use(new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done) {
    getUser(username)
    console.log("\n===========");
    console.log(user);
    console.log("user: " + user[0]);
    console.log("password: " + user[0].password);
    console.log("plain password: " + password);
    console.log(db.User.checkPassword);
    console.log("\n===========")
    if (!user) {
      return done(null, false, { message: 'incorrect username' });
    } else if (!user.checkPassword(password)) {
      return done(null, false, { message: 'incorrect password' });
    }
    return done(null, user);
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