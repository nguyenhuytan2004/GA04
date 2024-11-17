const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/CheckoutController");

router.use("/", checkoutController.index);

module.exports = router;
