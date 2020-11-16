const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadShema = new Schema({
  title: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model("Thread", threadShema);
