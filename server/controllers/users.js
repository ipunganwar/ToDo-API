const Users = require('../models/user')

const register = (req, res) => {
	Users.create(
		{
			username : req.body.username,
			password : req.body.password,
			createdAt : new Date(),
			updatedAt : new Date()
		}
	)
	.then(result => { res.status(201).send({msg : 'create', result : result}) })
		.catch(error => { res.status(500).send(error)})
}

const findOne = (req, res) => {
	Users.findOne(
		{username : req.body.username},
		{username:true, task:true, doing:true, done:true,updatedAt:true, createdAt:true}
	)
	.then(result => { res.status(200).send(result)})
	.catch(error => { res.status(500).send(error)})
}

module.exports = {
	register,
	findOne
}