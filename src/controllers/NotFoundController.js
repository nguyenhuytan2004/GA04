class NotFoundController {
    // [GET] '/404.html'
    index(req, res) {
        res.render("notFound");
    }
}

module.exports = new NotFoundController();
