const mongoose = require('mongoose').connect('mongodb://localhost/todos');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
	name : String,
	status : Boolean,
	createdAt : Date,
	updatedAt : Date
})

let Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks