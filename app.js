const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, ()=>{console.log("servidor corriendo")});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.use(express.static(path.join(__dirname, "public")))