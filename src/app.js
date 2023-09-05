const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const routes = require("./routes/main");
const async = require("hbs/lib/async");
const details = require("./models/details");

const app = express();


app.use("/public", express.static("public"));
app.use("", routes);

//hbs engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//database connections
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Dynamic-web-app');
    console.log("database connected");
    // detail.create({
    //     brandName: "mitul",
    //     brandIconUrl: "http://localhost:3000/public/images/pic.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/",
    //         },
    //         {
    //             label: "Services",
    //             url: "/services",
    //         },
    //         {
    //             label: "Gallary",
    //             url: "/gallary",
    //         },
    //         {
    //             label: "About",
    //             url: "/about",
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/conatct-us",
    //         },
    //     ],
    // }),
}


app.listen(3000, () => {
    console.log("server started");
});  