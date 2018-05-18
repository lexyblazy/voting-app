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
const { SECRET, DB } = require("./config/keys");

// connect to the database;
const db = async () => {
  await mongoose.connect(DB);
  console.log("Connection the db was successful");
};

try {
  db();
} catch (error) {
  console.log(error);
  setInterval(db, 2000);
}

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  // express will serve up our static assets such as index.html, main.js and css
  app.use(express.static(`${__dirname}/client/build`));

  //for any set of routes that are not defined within out app
  app.get("*", (req, res) => {
    const index = path.resolve("client", "build", "index.html");
    res.sendFile(index);
  });
}

// some helpful middleware to make our lives easier
app.enable("trust proxy");
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
