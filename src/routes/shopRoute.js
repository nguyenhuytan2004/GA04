const express = require("express");
const router = express.Router();

const shopController = require("../controllers/ShopController");

router.use("/shop.html", shopController.index);

module.exports = router;
