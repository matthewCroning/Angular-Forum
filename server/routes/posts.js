const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");
const Auth = require("../controllers/auth");

router.post("/create", Auth.authMiddleware, Post.create);

router.get("/test", function(req, res) {
    res.json({ok: "ok"});
});

module.exports = router;