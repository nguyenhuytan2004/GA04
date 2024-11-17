const homeRoute = require("./homeRoute");
const aboutRoute = require("./aboutRoute");
const registerRoute = require("./registerRoute");

function route(app) {
    app.use("/register.html", registerRoute);
    app.use("/about.html", aboutRoute);
    app.use("/", homeRoute);
}

module.exports = route;
