const express = require("express");
const { createOrUpdateUser } = require("../controllers/authController");
const router = express.Router();
const { authCheck } = require("../middlewares/auth");
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
