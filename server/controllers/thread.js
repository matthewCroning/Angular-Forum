const config = require("../config/dev");
const Thread = require("../models/thread");
const User = require("../models/user");
const {normalizeErrors} = require("../helpers/mongoose-helper");
const thread = require("../models/thread");

exports.create = function(req, res, next){
    const user = res.locals.user;
    const title = req.body.title;
    console.log(user);
    console.log("title: " + title);
    const createdThread = new Thread({title: title, user: user});
    createdThread.save();
    user.threads.push(createdThread);
    user.save();
    return res.json(createdThread.id);
}

exports.find = function(req, res, next){
    const threadId = req.body.id;
    Thread.findById(threadId).exec(function(err, foundThread) {
        return res.json(foundThread);
    })
}

exports.findAll = function(req, res, next){
    var page = Number(req.params.page);
    const view = Number(req.params.view);
    page = page-1;
    const pagesSkip = view * page;
    console.log("page: " + page);
    console.log("view: " + view);
    console.log(pagesSkip);
    Thread.find().populate('user').collation({ locale: "en" }).skip(pagesSkip).limit(view).sort([['updatedAt', -1]]).exec(function(err, AllThreads){
        return res.json(AllThreads);
    })
}


exports.findByTitle = function(req, res, next){
    var title = req.params.title;
    var page = Number(req.params.page);
    var pagesSkip = view * page;
    var view = Number(req.params.view);
    console.log("findingTitle");
    Thread.find({title: {$regex: title, $options: "i"}} ).skip(pagesSkip).limit(view).exec(function(err, FoundThreads){
        return res.json(FoundThreads);
    }); 

}
    


exports.findById = function(req, res, next){
    const threadId = req.params.id;
  

    // Thread.findById(threadId).populate({path: 'user'}).populate({path: 'posts',  populate: {path: 'user'} }).exec(function(err, foundThread) {
    //     return res.json(foundThread);
    // })

    Thread.aggregate([
            { $unwind: "$posts" },
            { $sort: { "posts.createdAt": -1 } },
            { $group: { _id: "$_id", details: { $push: "$posts" } } }
    ]);

    Thread.find({_id: threadId}).exec(function(err, foundThread) {
         return res.json(foundThread);
     })

     
    // Thread.findById(threadId).populate().exec(function(err, foundThread) {
    //     return res.json(foundThread);
    // })
}

  