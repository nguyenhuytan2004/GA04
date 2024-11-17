class NewController {
    // [GET] '/'
    index(req, res) {
        res.render("home");
    }
}

module.exports = new NewController();
