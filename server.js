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

app.use(cookieParser());
app.use(bodyParser());
app.use(passport.initialize());
app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  })
)
app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'client/build')))
// Serve up static assets (usually on heroku)
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