//absolute imports
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//relative imports
const authRoutes = require('./routes/authRoutes');


app.use(authRoutes);

app.get("/api", (req, res) => {
  res.send({ message: "Home page" });
});



app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
