var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});
var Book = module.exports = mongoose.model('book',bookSchema); 
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}
module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}
module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}
module.exports.updateBook = function(id, book, options, callback){
	var query = {_id: id};
	var update = {
		name: book.name,
		author: book.author,
		description: book.description
	}
	Book.findOneAndUpdate(query,update,options,callback);
}
module.exports.deleteBookById = function(id, callback){
	var query =  {_id: id};
	Book.remove(query, callback);
}