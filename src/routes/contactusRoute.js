const express = require("express");
const router = express.Router();

const contactusController = require("../controllers/ContactusController");

router.use("/", contactusController.index);

module.exports = router;
