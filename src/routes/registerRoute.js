const express = require("express");
const router = express.Router();

const RegisterController = require("../controllers/RegisterController");

router.use("/", RegisterController.index);

module.exports = router;
