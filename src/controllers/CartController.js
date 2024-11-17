class AboutController {
    // [GET] '/cart.html'
    index(req, res) {
        res.render("cart");
    }
}

module.exports = new AboutController();
