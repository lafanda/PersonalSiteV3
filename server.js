const express = require("express");
const bodyParser = require ("body-parser");
const MailParser = require("mailparser").simpleParser;


const app = express();
app.set  ('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index" , {});
})
app.get("/pastPosts", function(req, res){
    res.render("pastPosts" , {});
})

app.get("/post", function(req, res){
    res.render("post" , {});
})

app.listen(3000, function(){
    console.log("running");
});

