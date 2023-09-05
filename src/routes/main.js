const express = require("express");
const details = require("../models/details");
const slider = require("../models/slider");
const async = require("hbs/lib/async");

const routes = express.Router();

routes.get("/", async (req, res) => {
    const detail = await details.findOne({ "_id": "64f6cb4d3dcfa5686bd3e605" });

    const slides = await slider.find();
    console.log(slides);

    res.render("index", {
        info: detail,
        slideInfo: slides
    });
});

module.exports = routes;