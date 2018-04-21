const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const pollSchema = new Schema({
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  options: [String]
})

module.exports = model('Poll',pollSchema);