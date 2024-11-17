const  User  = require('../models/user'); // Import model User

class RegisterController {
    // [GET] /register.html - Hiển thị form đăng ký
    async index(req, res) {
        res.render('register'); // Render form đăng ký (register.hbs)
    }

    // [POST] /register.html - Xử lý form đăng ký
    async register(req, res) {
        try {
            const { email, password, confirm_password } = req.body;

            // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
            if (password !== confirm_password) {
                return res.status(400).send('Passwords do not match');
            }

            
            console.log(req.body);
            // Tạo người dùng mới
            const newUser = await User.create({
                email,
                password_1: password, 
            });

            // Redirect hoặc gửi thông báo thành công
            res.status(201).redirect('/login'); // Redirect đến trang đăng nhập

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new RegisterController();
