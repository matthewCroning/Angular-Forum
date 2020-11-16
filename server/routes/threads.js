const express = require("express");
const router = express.Router();
const Thread = require("../controllers/thread");
const Auth = require("../controllers/auth");

router.post("/create", Auth.authMiddleware, Thread.create);
router.post("/find", Thread.find);
router.get("/findAll", Thread.findAll);


module.exports = router;