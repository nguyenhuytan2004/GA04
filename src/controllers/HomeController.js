class HomeController {
    // [GET] '/index.html'
    index(req, res) {
        res.render("home");
    }
}

module.exports = new HomeController();
