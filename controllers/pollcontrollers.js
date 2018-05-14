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
    const polls = await Poll.find({}).select("-options");
    res.send(polls);
  } catch (error) {
    console.log(error);
  }
};

// fetch all the polls created by the currently logged in user
exports.fetchMyPolls = async (req, res) => {
  try {
    const polls = await Poll.find({ _author: req.user._id });
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

//vote on a specific poll
exports.voteOnPoll = async (req, res) => {
  //firstly we find that poll and the option;
  const { id, option } = req.params;
  const poll = await Poll.findOneAndUpdate(
    {
      _id: id,
      options: { $elemMatch: { option } }
    },
    {
      $inc: { ["options.$.votesCount"]: 1 }
    }
  ).exec();

  //if that option does not exist, we create it and increment it by 1
  if (!poll) {
    const poll = await Poll.findById(id);
    poll.options.push({
      option,
      votesCount: 1
    });
    await poll.save();
  }
  res.send({ message: "Channel exists" });
};

// delete a specific poll
exports.deletePoll = async (req, res) => {
  //verify if the currently logged in user created that poll
  const poll = await Poll.findById(req.params.id);
  if (poll._author.equals(req.user._id)) {
    console.log("this users owns this poll");
    await poll.remove();
    return res.send({ message: "Deleted" });
  }
  res.status(403).send({ error: "You are not authorized to do that" });
};

// delete all Polls
exports.deleteAllPolls = async (req, res) => {
  await Poll.remove();
  console.log("removed successfully");
};
