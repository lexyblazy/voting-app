//absolute imports
const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 5000;

//relative imports
const authRoutes = require("./routes/authRoutes");
const { SECRET } = require("./config/keys");

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);

require("./services/passport");
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Home page" });
});
app.get("/api", (req, res) => {
  res.send({ message: "Api page" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
