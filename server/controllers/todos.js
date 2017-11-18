const Todos = require('../models/todo')

const create = (req, res) => {
	Todos.create(req.body)
	.then(result => { res.status(201).send({msg : 'create', result : result}) })
	.catch(error => { res.status(500).send(error)})
}

const create_list = (req, res) => {
	
	// console.log(typeof req.body.list)
	if(typeof req.body.task != 'undefined'){
		Todos.findOneAndUpdate(
			{username : req.body.username}, 
			{task : req.body.task.split(',')}
		)
		.then(result => { res.status(201).send({msg : 'create', result : result}) })
		.catch(error => { res.status(500).send(error)})
		}
	else{
		res.status(404).send({msg : "must insert a task"})
	}
	
}





module.exports = {
	register,
	create,
	user,
	create_list
}