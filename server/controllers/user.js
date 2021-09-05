const config = require("../config/dev");
const User = require("../models/user");
const {normalizeErrors} = require("../helpers/mongoose-helper");


exports.findById = function(req, res, next){
    const userId = req.params.id;
 
    User.findById(userId).populate(
    { path: "posts",
        populate: {
            path: "thread",
            select: "title -posts -user"
        }
    }
    ).populate("threads").exec(function(err, foundUser) {
        return res.json(foundUser);
    })
    // console.log(userId);
    //  User.findById(userId).populate("threads").exec(function(err, foundUser) {
    //      return res.json(foundUser);
    //  })
}