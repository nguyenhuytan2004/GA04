class LoginController {
    // [GET] '/login.html'
    index(req, res) {
        res.render("login");
    }
}

module.exports = new LoginController();
