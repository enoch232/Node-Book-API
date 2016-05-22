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