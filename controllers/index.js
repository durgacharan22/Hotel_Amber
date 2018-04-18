var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');
const app = express.Router()
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',(req,res) =>{
    
            res.render('./home.ejs');
});

app.post('/',(req,res) =>{
    var username;
    console.log("Post data")
    username = req.body.username
    console.log(req.body.username)
    res.render('SignUp.ejs',{
        username:req.body.username
});
console.log(JSON.stringify(req.body));
console.log("Post Data "+ username );
});

app.get('/login',(req,res) =>{
    
            res.render('./login.ejs');
});

app.get('/SignUp',(req,res) =>{
    
            res.render('./SignUp.ejs');
});


//Charan
app.get('/About',(req,res) =>{
    // 
            res.render('./About.ejs');
});
app.get('/menu',(req,res) =>{
    // 
            res.render('./menu.ejs');
});
app.get('/profile',(req,res) =>{
    // 
            res.render('./profile.ejs');
});
app.get('/cart',(req,res) =>{
    // 
            res.render('./cart.ejs');
});
app.get('/header',(req,res) =>{
    // 
            res.render('./header.ejs');
});

//sangeetha

app.get('/addremoveuser',(req,res) =>{
   
            res.render('./Admin_AddRemoveUser.ejs');
});
app.get('/adminprofile',(req,res) =>{
    
             res.render('./Admin_Profile.ejs');
 });
 app.get('/specialoffer',(req,res) =>{
    
             res.render('./Admin_SpecialOffer.ejs');
 });
 app.get('/adminupdatecategory',(req,res) =>{
    
             res.render('./Admin_UpdateCategory.ejs');
 });
 app.get('/adminupdatemenu',(req,res) =>{
    
             res.render('./Admin_UpdateMenu.ejs');
 });







module.exports = app