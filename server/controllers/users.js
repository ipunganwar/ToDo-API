const Users = require('../models/user')
const bcrypt = require('../helpers/bcrypt')

const register = (req, res) => {
	bcrypt.encrypt(req.body.password).then(password =>{
		Users.create(
			{
				username : req.body.username,
				password : password,
				createdAt : new Date(),
				updatedAt : new Date()
			}
		)
		.then(result => { res.status(201).json({msg : 'create', result : result}) })
		.catch(error => { res.status(500).json(error)})
	})
	.catch(err => { res.status(500).json(err) })
}

const find = (req, res) => {
	Users.find()
	.populate('tasks')
	.exec((err, result) =>{ 
		if (err){
			res.status(404).json(err)
		} 
		res.status(200).json(result)})
	.catch(error => { res.status(500).json(error)})
}

module.exports = {
	register,
	find
}