const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");

const app = express();

const routes = require("./routes/main");
const async = require("hbs/lib/async");

app.use("/public", express.static("public"));
app.use("", routes);

//hbs engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//database connections
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017');
    console.log("database connected");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 

  
app.listen(3000, () => {
    console.log("server started");
});  