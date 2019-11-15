const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const session = require('express-session')
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require ("./config/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

//session
app.use(session({
  secret:'scooby-doo',
  resave: true, //required
  saveUninitialized: true //required
}))

//passport
app.use(passport.initialize());
app.use(passport.session())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//sessions (Setup for Passport-Joe)



// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/studiodb",
{
    useCreateIndex: true,
    useNewUrlParser: true
});


app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT));