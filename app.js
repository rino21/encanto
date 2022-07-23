const express = require("express");
const app = express();
const port = 8000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index",{title:"SUCCESS !"});
});

app.get("/inscription",(req,res)=>{
    res.render("inscription");
});

app.listen(port,()=>{console.log(`l'application ecoute au port : ${port}`)});