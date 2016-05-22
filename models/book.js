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
	}
});
var Book = module.exports = mongoose.model('book',bookSchema); 
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}