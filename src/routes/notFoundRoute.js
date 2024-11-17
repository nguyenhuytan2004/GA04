const express = require("express");
const router = express.Router();

const notFoundController = require("../controllers/NotFoundController");

router.use("/", notFoundController.index);

module.exports = router;
