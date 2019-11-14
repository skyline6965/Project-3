const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const session = require("express-sessions");
const passport = require("passport");


// Define middleware here
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/public')))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//sessions
app.use(session({
  secret:'scooby-doo',
  resave: false, //required
  saveUninitialized: false //required
}))

app.use((req,res,next) => {
  console.log(req.session);
  next();
})

//passport

app.use(passport.initialize());

app.use(passport.session())



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/studiodb",
{
    useCreateIndex: true,
    useNewUrlParser: true
});


app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT));