const homeRouter = require("./homeRoute");
const aboutRouter = require("./aboutRoute");
const shopRoute = require("./shopRoute");
const cartRouter = require("./cartRoute");
const checkoutRouter = require("./checkoutRoute");
const contactusRouter = require("./contactusRoute");
const loginRouter = require("./loginRoute");
const productRouter = require("./productRoute");
const notFoundRouter = require("./notFoundRoute");

function route(app) {
    app.use("/404.html", notFoundRouter);
    app.use("/single-product-page.html", productRouter);
    app.use("/login.html", loginRouter);
    app.use("/contactus.html", contactusRouter);
    app.use("/checkout.html", checkoutRouter);
    app.use("/cart.html", cartRouter);
    app.use("/about.html", aboutRouter);
    app.use("/shop.html", shopRoute);
    app.use("/", homeRouter);
}

module.exports = route;
