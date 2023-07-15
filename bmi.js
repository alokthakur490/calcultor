const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.post('/', (req, res) => {
    var weight = Number(req.body.num1);
    var height = Number(req.body.num2);
    var heightsqr = height * height;
    var result = weight/heightsqr;
    console.log(req.body);
    
  
    res.send('The result of the calculation is ' + result);
  });
  
app.listen(3000,function(){
    console.log("server started at port 3000");
});

