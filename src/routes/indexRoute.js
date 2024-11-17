const homeRouter = require("./homeRoute");
const aboutRouter = require("./aboutRoute");

function route(app) {
    app.use("/about.html", aboutRouter);
    app.use("/", homeRouter);
}

module.exports = route;
