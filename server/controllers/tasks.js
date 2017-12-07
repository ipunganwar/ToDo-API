	const Tasks = require('../models/task')

const destroy = (req, res) => {
	console.log(req.params)
	Tasks.deleteOne({_id : req.params.id})
	.then(result => {
		res.status(200).json(result)
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

const list = (req, res) => {
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
	console.log(req.body)
	Tasks.create(req.body)
	.then(result => { res.status(201).json(result) })
	.catch(error => { res.status(500).json(error) })
}

const done = (req, res) => {
	Tasks.findByIdAndUpdate({_id: req.params.id})
	.then(result => {
		result.done = true
		result.save()
		.then(hasil => { res.status(201).json(hasil)})
		.catch(error => { res.status(500).json(error) })
	 })
	.catch(error => { res.status(500).json(error) })
}





module.exports = {
	destroy,
	list,
	add,
	done,
	findbyid
}