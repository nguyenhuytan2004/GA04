const homeRouter = require("./homeRoute");
const aboutRouter = require("./aboutRoute");
const registerRouter = require("./registerRoute");
const shopRouter = require("./shopRoute");
const cartRouter = require("./cartRoute");
const checkoutRouter = require("./checkoutRoute");
const contactusRouter = require("./contactusRoute");
const loginRouter = require("./loginRoute");
const notFoundRouter = require("./notFoundRoute");
const productRouter = require("./productRoute");

function route(app) {
    app.use("/single-product-page.html", productRouter);
    app.use("/404.html", notFoundRouter);
    app.use("/login.html", loginRouter);
    app.use("/contactus.html", contactusRouter);
    app.use("/checkout.html", checkoutRouter);
    app.use("/register.html", registerRouter);
    app.use("/cart.html", cartRouter);
    app.use("/about.html", aboutRouter);
    app.use("/shop.html", shopRouter);
    app.use("/", homeRouter);
}

module.exports = route;
