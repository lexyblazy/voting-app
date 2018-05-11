const router = require("express").Router({ mergeParams: true });
const { requireLogin } = require("../controllers/authControllers");
const {
  fetchPoll,
  fetchAllPolls,
  createPoll,
  voteOnPoll,
  fetchMyPolls,
  deleteAllPolls
} = require("../controllers/pollcontrollers");

router.get("/polls", fetchAllPolls);
router.post("/polls", requireLogin, createPoll);
router.get("/polls/me", requireLogin, fetchMyPolls);
router.get("/poll/:id", fetchPoll);
router.get("/polls/deleteAll", requireLogin, deleteAllPolls);
router.post("/poll/:id/vote/:option", voteOnPoll);

module.exports = router;
