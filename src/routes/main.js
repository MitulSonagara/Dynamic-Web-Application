const express = require("express");
const details = require("../models/details");
const slider = require("../models/slider");
const service = require("../models/service");
const contact = require("../models/contact");
const async = require("hbs/lib/async");

const routes = express.Router();

routes.get("/", async (req, res) => {
    const detail = await details.findOne({ "_id": "64f6cb4d3dcfa5686bd3e605" });

    const slides = await slider.find();

    const services = await service.find();


    res.render("index", {
        info: detail,
        slideInfo: slides,
        serviceInfo: services
    });
});

routes.post("/contact", async (req, res) => {
    console.log(req.body);
    try {
        const data = await contact.create(req.body);
        console.log(data);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
})

module.exports = routes;