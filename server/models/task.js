const mongoose = require('mongoose').connect('mongodb://localhost/todos');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
	task : {
		type : String,
		required : true
	},
	done : {
		type: Boolean,
		default : false
	},
	createdAt : {
		type : Date,
		default : new Date()
	},
	updatedAt : Date
})

let Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks