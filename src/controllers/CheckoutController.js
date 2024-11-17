class CheckoutController {
    // [GET] '/checkout.html'
    index(req, res) {
        res.render("checkout");
    }
}

module.exports = new CheckoutController();
