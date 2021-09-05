const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.get("/findById/:id", User.findById);

module.exports = router;