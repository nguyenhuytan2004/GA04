class ShopController {
    // [GET] '/'
    index(req, res) {
        res.render("shop");
    }
}

module.exports = new ShopController();
