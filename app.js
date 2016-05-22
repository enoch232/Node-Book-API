var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;
app.get("/",function(req, res){
	res.end("Hello World");
});
app.listen(3000);
console.log("Server is now running at port 3000..")