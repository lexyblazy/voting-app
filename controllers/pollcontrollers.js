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
  //firstly we find that poll;
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
  res.send({ message: "Channel exists" });
};

// fetch my polls

// delete all Polls
exports.deleteAllPolls = async (req, res) => {
  await Poll.remove();
  console.log("removed successfully");
};
