const express= require("express");
const bodyParser=require("body-parser");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render("home");
});
app.get("/account",function(req,res){
  res.render("account");
});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/album",function(req,res){
  res.render("album");
});
app.get("/department",function(req,res){
  res.render("department");
});
app.get("/students",function(req,res){
  res.render("students");
});



app.listen(3000,function(){
  console.log("Server started at port 3000.");
});
