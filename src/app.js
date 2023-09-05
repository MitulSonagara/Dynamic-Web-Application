const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const routes = require("./routes/main");
const async = require("hbs/lib/async");
const details = require("./models/details");
const slider = require("./models/slider");
const service = require("./models/service");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
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



    // service.create([
    //     {
    //         icon: "fa-solid fa-graduation-cap",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-school",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-envelope",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-star",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-location-dot",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-wand-magic-sparkels",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-truck-fast",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-pen-nib",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    //     {
    //         icon: "fa-solid fa-paperclip",
    //         title: "Provide Best Courses",
    //         description: "We provide courses that helps students in learning and placement.",
    //         linkText: "Check",
    //         link: "#"
    //     },
    // ]);

    // slider.create([
    //     {
    //         title: "Learn java in very easy manner!",
    //         subTitle: "Java is the one of the most populer programming language.",
    //         imageUrl: "/public/images/pic1.jpg"
    //     },
    //     {
    //         title: "What is django in pyhton?",
    //         subTitle: "Django is most famus web framework of python programming.",
    //         imageUrl: "/public/images/pic2.jpg"
    //     },
    //     {
    //         title: "What about node js?",
    //         subTitle: "Node js is runtime environment to execute javascript outside browser.",
    //         imageUrl: "/public/images/pic3.jpg"
    //     },
    //     {
    //         title: "Learn java in very easy manner!",
    //         subTitle: "Java is the one of the most populer programming language",
    //         imageUrl: "/public/images/pic4.jpg"
    //     },
    // ]);

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