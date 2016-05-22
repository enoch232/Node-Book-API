var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
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
app.get("/api/books/:_id",function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});

});
app.post("/api/books", function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});

});
app.delete("/api/books/:_id", function(req, res){
	Book.deleteBookById(req.params._id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});

});
app.listen(3000);
console.log("Server is now running at port 3000..");