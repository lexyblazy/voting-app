const router = require("express").Router({ mergeParams: true });
const Poll = require("../models/Poll");
const { requireLogin } = require("../controllers/authControllers");

router.get("/polls", async (req, res) => {
  try {
    const polls = await Poll.find({});
    console.log(polls);
    res.send(polls);
  } catch (error) {
    console.log(error);
  }
});

router.get("/polls/delete", async (req, res) => {
  await Poll.remove();
  console.log("removed successfully");
});

router.post("/polls", requireLogin, async (req, res) => {
  const { title, options } = req.body;
  const poll = await new Poll({
    title,
    options: options.split(","),
    _author: req.user._id
  }).save();
  res.send(poll);
});

module.exports = router;
