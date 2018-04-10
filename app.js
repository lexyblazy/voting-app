//absolute imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const PORT = process.env.PORT || 5000;

//tell Mongoose to use es6 promises
mongoose.Promise = global.Promise;

//relative imports
const authRoutes = require("./routes/authRoutes");
const { SECRET } = require("./config/keys");

//connect to the database;
const db = async () => {
  await mongoose.connect("mongodb://localhost:27017/voting-app");
  console.log("Connection the db was successful");
};

try {
  db();
} catch (error) {
  console.log(error);
}

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./services/passport");
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Home page" });
});
app.get("/api/current_user", (req, res) => {
  res.send(req.user);
});
app.get('/api/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
