const config = require("../config/dev");
const Post = require("../models/post");
const Thread = require("../models/thread");
const ThreadController = require("../controllers/thread");
const User = require("../models/user");
const {normalizeErrors} = require("../helpers/mongoose-helper");

exports.create = function(req, res, next){
     
        const user = res.locals.user;
        const content = req.body.content;
        const threadId = req.body.threadId;
        const thread = null;
        const createdPost = new Post({content: content, user: user});
   
        Thread.findById(threadId)
        .then(thread => {
            thread.updatedAt = createdPost.createdAt;
            thread.save();
            createdPost.thread = thread;
            createdPost.save();
            thread.posts.push(createdPost);
            thread.save();
            user.posts.push(createdPost);
            user.save();
           
            return res.json(createdPost);
        })
      .catch(err => {
        console.log(err);
      });
 
}

exports.createReply = function(req, res, next){
     console.log("creating reply");
    var user = res.locals.user;
    var content = req.body.content;
    var postId = req.body.postId;
    var thread = null;
    var createdPost = new Post({content: content, user: user});

    Post.findById(postId).populate('thread')
    .then(post => {
        console.log(post);
        console.log(post.thread);
        // Thread.findById(post.thread).then
        //   (thread => {
        //     console.log(thread);
        //   }
        //           )
        thread = post.thread;
        post.thread.updatedAt = createdPost.createdAt;
        thread.save();
        createdPost.thread = post.thread;
        createdPost.save();
        post.replys.push(createdPost);
        post.save();
        user.posts.push(createdPost);
        user.save();
        
        return res.json(createdPost);
    })
  .catch(err => {
    console.log(err);
  });

}
