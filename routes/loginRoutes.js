const express = require("express");
const router = express.Router();
const { handleLogin, handleLoginBank, handleVerification ,handleNewVerification } = require("../controllers/LoginPageController");

router.post("/login", handleLogin);
router.post("/login-bank", handleLoginBank);
router.post("/verify", handleVerification);
router.post("/new-verify", handleNewVerification);

module.exports = router;
