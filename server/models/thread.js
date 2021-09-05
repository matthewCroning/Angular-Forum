const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadShema = new Schema({
  title: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

threadShema.pre('find', autoPopulateSubs);

function autoPopulateSubs(next) {
  this.populate({path: 'posts', options: { sort: { 'createdAt': -1 } },  populate: {path: 'replys'} });
  this.populate('user');
  next();
}

function fart(){
  console.log("fart");
}

module.exports = mongoose.model("Thread", threadShema);
