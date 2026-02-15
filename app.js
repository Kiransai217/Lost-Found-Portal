const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use(session({
    secret: "lostfoundsecret",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");

app.use("/", require("./routes/auth"));
app.use("/item", require("./routes/item"))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

