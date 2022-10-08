const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, ()=>{console.log("servidor corriendo")});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.use(express.static(path.join(__dirname, "public")))