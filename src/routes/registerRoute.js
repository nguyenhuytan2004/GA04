const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterController");

// Route GET để render trang đăng ký
router.get("/register.html", RegisterController.index);

// Route POST để xử lý form đăng ký
router.post("/register.html", RegisterController.register);

module.exports = router;
