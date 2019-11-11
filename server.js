const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/studiodb");

app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT));