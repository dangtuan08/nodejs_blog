const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

//  HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources\\views"));

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
