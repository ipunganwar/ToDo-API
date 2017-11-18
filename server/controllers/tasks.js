const Tasks = require('../models/task')

const destroy = (req, res) => {
	Tasks.deleteOne({_id : req.params.id})
	.then(result => {
		res.status(200).json(result)
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

const find = (req, res) => {
	Tasks.find()
	.then(result => {
		res.status(200).json(result)
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

const findbyid = (req, res) => {
	Tasks.find({_id : req.params.id})
	.then(result => {
		res.status(200).json(result)
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

const add = (req, res) => {
	Tasks.create(req.body)
	.then(result => { res.status(201).json(result) })
	.catch(error => { res.status(500).json(error) })
}

const update = (req, res) => {
	Tasks.findOneAndUpdate({ _id : req.params.id })
	.then(result => {
		result.task = req.body.task
		result.done = (req.body.done === 'true')

		result.save()
		.then(hasil => { res.status(201).json(hasil)})
		.catch(error => { res.status(500).json(error) })
	 })
	.catch(error => { res.status(500).json(error) })
}





module.exports = {
	destroy,
	find,
	add,
	update,
	findbyid
}