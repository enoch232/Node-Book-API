var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
mongoose.connect('mongodb://localhost:27017/bookkeeper');
var db = mongoose.connection;
Book = require('./models/book');
app.get("/",function(req, res){
	res.end("Hello World");
});
app.get("/api/books",function(req, res){
	Book.getBooks(function(err, books){
		if (err){
			throw err;
		}
		res.json(books);
	});
});
app.listen(3000);
console.log("Server is now running at port 3000..")