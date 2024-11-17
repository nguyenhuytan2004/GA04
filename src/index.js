const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes/indexRoute");

// Đảm bảo Express phục vụ tệp tĩnh từ thư mục 'src/assets' và 'node_modules'
app.use("/src", express.static("src"));
app.use("/node_modules", express.static("node_modules"));

// Middleware for parsing request body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan("combined"));

// Handlebars template engine setup
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "resources", "views", "layouts"),
        partialsDir: path.join(__dirname, "resources", "views", "partials"),
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Test log (can be removed in production)
console.log("Views directory:", path.join(__dirname, "resources", "views"));

// Route handlers
route(app);

// Start server
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
