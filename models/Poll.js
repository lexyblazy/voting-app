const mongoose = require("mongoose");
const { Schema } = mongoose;

const pollSchema = new Schema({
  _author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  options: [
    {
      option: String,
      votesCount: {
        type: Number,
        default: 0
      }
    }
  ]
});

module.exports = mongoose.model("Poll", pollSchema);
