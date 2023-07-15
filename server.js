const express = require("express");
const app = express();
app.get("/",function(request, response){
    response.send("<h1>hello</h1><h2>Mr. Alok</h2");
});
app.get("/contact",function(request, response){
    response.send("thaluralok490@gmail.com");
});
app.get("/aboutme",function(request, response){
    response.send("I am a web developer and upcoming data scientist.I love Earth❤️");
});
app.get("/love",function(request, response){
    response.send("I love Bhumi❤️");
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});

