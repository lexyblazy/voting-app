const router = require("express").Router({ mergeParams: true });
const { requireLogin } = require("../controllers/authControllers");
const {
  fetchAllPolls,
  createPoll,
  deleteAllPolls
} = require("../controllers/pollcontrollers");

router.get("/polls", fetchAllPolls);
router.post("/polls", requireLogin, createPoll);
router.get("/polls/deleteAll", requireLogin, deleteAllPolls);

module.exports = router;
