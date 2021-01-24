const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");
const Auth = require("../controllers/auth");

router.post("/create", Auth.authMiddleware, Post.create);
router.post("/createreply", Auth.authMiddleware, Post.createReply);

router.get("/test", function(req, res) {
    res.json({ok: "ok"});
});

module.exports = router;