class ProductController {
    // [GET] '/single-product-page.html'
    index(req, res) {
        res.render("product");
    }
}

module.exports = new ProductController();
