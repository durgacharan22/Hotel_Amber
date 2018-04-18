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
});app.get('/profile',(req,res) =>{
    // 
            res.render('./profile.ejs');
});app.get('/cart',(req,res) =>{
    // 
            res.render('./cart.ejs');
});app.get('/header',(req,res) =>{
    // 
            res.render('./header.ejs');
});
// app.get('/studentrooms',(req,res) =>{
//     
//             res.render('./studentrooms.ejs');
// });

// app.get('/studenthistory',(req,res) =>{
//     
//             res.render('./studenthistory.ejs');
// });
// app.get('/studentprofile',(req,res) =>{
//     
//             res.render('./studentprofile.ejs');
// });
// app.get('/logout',(req,res) =>{
//     
//             res.render('./logout.ejs');
// });
// app.get('/aboutus',(req,res) =>{
//             res.render('./aboutus.ejs');
// });

// app.get('/feedback',(req,res) =>{
//     res.render('./feedback.ejs');
// });



module.exports = app