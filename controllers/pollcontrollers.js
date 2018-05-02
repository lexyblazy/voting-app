//require in the poll schema
const Poll = require("../models/Poll");

//  create a new Poll
exports.createPoll = async (req, res) => {
  const { title, options } = req.body;
  const poll = new Poll({
    title,
    options,
    _author: req.user._id
  });
  console.log(poll);
  await poll.save();
  res.send(poll);
};

// Fetch all Polls
exports.fetchAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find({});
    res.send(polls);
  } catch (error) {
    console.log(error);
  }
};

// fetch a specific poll
exports.fetchPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    res.send(poll);
  } catch (error) {
    console.log(error);
  }
};

// fetch my polls

// delete all Polls
exports.deleteAllPolls = async (req, res) => {
  await Poll.remove();
  console.log("removed successfully");
};
