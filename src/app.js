const express = require("express");

const app = express();

const routes=require("./routes/main");

app.use("",routes);

app.listen(3000, ()=>{
    console.log("server started");
});