class AboutController {
    // [GET] '/about.html'
    index(req, res) {
        res.render("about");
    }
}

module.exports = new AboutController();
