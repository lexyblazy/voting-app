const mongoose = require("mongoose");
const { Schema } = mongoose;

const pollSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  options: [String]
});

module.exports = mongoose.model("Poll", pollSchema);
