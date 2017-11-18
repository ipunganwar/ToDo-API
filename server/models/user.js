const mongoose = require('mongoose').connect('mongodb://localhost/todos');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	username : String,
	password : String,
	createdAt : Date,
	updatedAt : Date
})

let Users = mongoose.model('Users', userSchema)

module.exports = Users