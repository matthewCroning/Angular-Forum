const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  thread: {type: Schema.Types.ObjectId, ref: 'Thread'},
  replys: [{type: Schema.Types.ObjectId, ref: 'Post'}] 
});

postSchema.pre('find', autoPopulateSubs);

function autoPopulateSubs() {
  this.populate({path: 'replys', options: { sort: { 'createdAt': -1 } }});
  this.populate('user');
}

module.exports = mongoose.model("Post", postSchema);
