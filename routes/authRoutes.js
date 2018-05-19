const router = require("express").Router();
const { logout } = require("../controllers/authControllers");

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

router.get("/api/logout", logout);

module.exports = router;
