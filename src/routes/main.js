const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("this is started");
});

module.exports=routes;