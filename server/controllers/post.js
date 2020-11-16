const config = require("../config/dev");
const Post = require("../models/post");
const Thread = require("../models/thread");
const ThreadController = require("../controllers/thread");
const User = require("../models/user");
const {normalizeErrors} = require("../helpers/mongoose-helper");

exports.create = function(req, res, next){
    const user = res.locals.user;
    const title = req.body.title;
    const content = req.body.content;
    const threadId = req.body.threadId;
    const thread = null;
    const createdPost = new Post({title: title, content: content, user: user});
    
    Thread.findById(threadId).exec(function(err, foundThread) {
        createdPost.thread = foundThread;
        createdPost.save();
        foundThread.posts.push(createdPost);
        return res.json(foundThread);
    })
}

