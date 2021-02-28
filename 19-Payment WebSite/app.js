const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const Scope = "This digital payment system  is a secure digital wallet in the form of a smartphone app that empowers you as an individual or a business to take full control of your finances at your fingertips anytime anywhere. the digital wallet is designed for you to effortlessly make time-saving payments whether you are getting coffee settling bills splitting the dinner check with friends, or making transfers to family members without having to carry your wallet worrying about change or the hassle of entering your credit card information when shopping online."
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/",function(req,res){
    res.render("home",{Scope:Scope})
})

app.get("/Features",function(req,res){
    res.render("Features",{Scope:Scope})
})

app.get("/Classic",function(req,res){
    res.render("Classic")
})

app.get("/Gold" ,function(req,res){
    res.render("Gold")
})

app.get("/Platinum" ,function(req,res){
    res.render("Platinum")
})


// app.listen(3000,function(){
//     console.log("server 3000 is running")
// })
app.listen(3000,function(){
    console.log("server 3000 is running")
})