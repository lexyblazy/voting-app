//absolute imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

//tell Mongoose to use es6 promises
mongoose.Promise = global.Promise;

//relative imports
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const { SECRET } = require("./config/keys");

// connect to the database;
const db = async () => {
  await mongoose.connect("mongodb://localhost:27017/voting-app");
  console.log("Connection the db was successful");
};

try {
  db();
} catch (error) {
  console.log(error);
  setInterval(db, 2000);
}

// some helpful middleware to make our lives easier
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    keys: [SECRET],
    maxAge: 604800000
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("tiny"));

//pull in our passport configuratin
require("./services/passport");

//loadup our routes....
app.use(authRoutes);
app.use("/api", pollRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Home page" });
});

//and of course, listen on this port...
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
