const homeRouter = require("./homeRoute");
const aboutRouter = require("./aboutRoute");
const shopRoute = require("./shopRoute");

function route(app) {
    app.use("/about.html", aboutRouter);
    app.use("/shop.html", shopRoute);
    app.use("/", homeRouter);
}

module.exports = route;
