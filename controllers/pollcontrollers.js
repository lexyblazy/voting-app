//require in the poll schema
const Poll = require("../models/Poll");

//  create a new Poll
exports.createPoll = async (req, res) => {
  const { title, options } = req.body;
  const poll = await new Poll({
    title,
    options: options.map(option => ({ option })),
    _author: req.user._id
  }).save();
  res.send(poll);
};

// Fetch all Polls
exports.fetchAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find({});
    console.log(polls);
    res.send(polls);
  } catch (error) {
    console.log(error);
  }
};

// delete all Polls
exports.deleteAllPolls = async (req, res) => {
  await Poll.remove();
  console.log("removed successfully");
};
