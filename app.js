var port = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/",function(request, response){
   response.send("<h1>Hello World</h1>"); 
});

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log('Running on http://localhost:' + port);