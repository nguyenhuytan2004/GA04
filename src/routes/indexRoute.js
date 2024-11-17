const homeRoute = require("./homeRoute");
const aboutRoute = require("./aboutRoute");
const registerRoute = require("./registerRoute");
const shopRoute = require ("./shopRoute");

function route(app) {
    app.get("/register.html", registerRoute); 
    app.post("/register.html", registerRoute);

    app.get("/about.html", aboutRoute);
    app.get("/shop.html", shopRoute);
    app.get("/", homeRoute);
    
}

module.exports = route;
