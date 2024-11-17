class ContactusController {
    // [GET] '/contactus.html'
    index(req, res) {
        res.render("contactus");
    }
}

module.exports = new ContactusController();
