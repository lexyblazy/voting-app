const router = require("express").Router();
const passport = require("passport");

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/api" }), 
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);


module.exports = router;
