var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');
const app = express.Router()
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',(req,res) =>{
    console.log("Get Data");
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

app.get('/Login',(req,res) =>{
    console.log("Get Data");
            res.render('./Login.ejs');
});
app.get('/SignUp',(req,res) =>{
    console.log("Get Data");
            res.render('./SignUp.ejs');
});
// app.get('/studentrooms',(req,res) =>{
//     console.log("Get Data");
//             res.render('./studentrooms.ejs');
// });

// app.get('/studenthistory',(req,res) =>{
//     console.log("Get Data");
//             res.render('./studenthistory.ejs');
// });
// app.get('/studentprofile',(req,res) =>{
//     console.log("Get Data");
//             res.render('./studentprofile.ejs');
// });
// app.get('/logout',(req,res) =>{
//     console.log("Get Data");
//             res.render('./logout.ejs');
// });
// app.get('/aboutus',(req,res) =>{
//             res.render('./aboutus.ejs');
// });

// app.get('/feedback',(req,res) =>{
//     res.render('./feedback.ejs');
// });



module.exports = app