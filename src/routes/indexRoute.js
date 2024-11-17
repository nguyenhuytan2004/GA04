const homeRoute = require("./homeRoute");
const aboutRoute = require("./aboutRoute");
const registerRoute = require("./registerRoute");
const shopRoute = require ("./shopRoute");

function route(app) {
    app.use("/register.html", registerRoute);
    app.use("/about.html", aboutRoute);
    app.use("/shop.html", shopRoute);
    app.use("/", homeRoute);
    
}

module.exports = route;
