const config = require("../config/dev");
const Thread = require("../models/thread");
const User = require("../models/user");
const {normalizeErrors} = require("../helpers/mongoose-helper");

exports.create = function(req, res, next){
    const user = res.locals.user;
    const title = req.body.title;

    const createdThread = new Thread({title: title, user: user});
    createdThread.save();
    return res.json("Thread Created!");
}

exports.find = function(req, res, next){
    const threadId = req.body.id;
    Thread.findById(threadId).exec(function(err, foundThread) {
        return res.json(foundThread);
    })
}

exports.findAll = function(req, res, next){
    Thread.find({}).exec(function(err, AllThreads){
        return res.json(AllThreads);
    })
}

exports.findById = function(req, res, next){
    const threadId = req.body.id;
    Thread.findById(threadId).exec(function(err, foundThread) {
        return res.json(foundThread);
    })
}