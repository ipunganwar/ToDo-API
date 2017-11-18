const mongoose = require('mongoose').connect('mongodb://localhost/todos');
const Schema = mongoose.Schema;

const userSchema = Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	name : String,
	email: String,
	createdAt : {
		type : Date,
		default : new Date()
	},
	updatedAt : Date
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users