const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postShema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  thread: {type: Schema.Types.ObjectId, ref: 'Thread'} 
});

module.exports = mongoose.model("Post", postShema);
