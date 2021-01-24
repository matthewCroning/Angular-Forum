const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadShema = new Schema({
  title: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

threadShema.pre('find', autoPopulateSubs);

function autoPopulateSubs(next) {
  this.populate({path: 'posts',  populate: {path: 'replys'} });
  this.populate('user');
  next();
}

function fart(){
  console.log("fart");
}

module.exports = mongoose.model("Thread", threadShema);
