const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.post('/addition', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
  
    res.send('The result of the addition is ' + result);
  });

  app.post('/multiply', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 * num2;
  
    res.send('The result of the multiplication is ' + result);
  });

  app.post('/subtract', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 - num2;
  
    res.send('The result of the Subtraction is ' + result);
  });

  app.post('/love', (req, res) => {
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);
    
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n);
     res.send(`<h1> ${num1}  Love  ${num2}  ${n} %</h1>`);
  
    
  });

  app.post('/div', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 / num2;
   if(num2 ===0){
    res.send('The result of the division is undefined');
   } else{
    res.send('The result of the division is '+ result);

   }
  });

  
app.listen(3000,function(){
    console.log("server started at port 3000");
});

