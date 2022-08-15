const express = require('express');
require("../db/conn");
const app = express();
const port = process.env.PORT || 3000;

//database
const User = require('../models/validation');
app.use(express.urlencoded({extended:false}));

//To dispaly static page
const path = require('path');
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//have to set 
app.set("view engine", "hbs");

//i have change the default path of views folder now telling to appl
const template_path = path.join(__dirname, "../templates/views");
app.set("views", template_path);

// also using partials in that app
const hbs = require("hbs");
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);


//routing
// app.get(path, callback)
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/service", (req, res)=>{
    res.render("service");
});

app.get("/gallery", (req, res)=>{
    res.render("gallery");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.post("/contact",async(req, res)=>{
    try{
    //    res.send(req.body);
    const userData= new User(req.body);
    await userData.save();
    res.status(201).render('index');

    }
    catch(error){
       res.status(500).send(error);
    }
});

//create server
app.listen(port, () =>{
    console.log(`Server running at port no: ${port}`)
});
