const Users = require('../models/user')
const bcrypt = require('../helpers/bcrypt')
const FB = require('fb')
const fb = new FB.Facebook({version: 'v2.8'});
const jwt = require('jsonwebtoken')
require('dotenv').config()

const setAccessToken = (req, res, next) => {
	if(req.headers.accesstoken){
		FB.setAccessToken(req.headers.accesstoken)
		next()
	}
	else{
		res.status(404)
	}
	
}

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
		.then(result => { res.status(201).json(result) })
		.catch(error => { res.status(500).json(error) })
	})
	.catch(err => { res.status(500).json(err) })
}

const find = (req, res) => {
	Users.find()
	.then(result => { res.status(200).json(result) })
	.catch(error => { res.status(500).json(error) })
}

const login = (req, res) =>{
	FB.api('/me', function(fb) {

    jwt.sign({id: fb.id, name : fb.name}, process.env.SALT_JWT, (err, token)=>{
    	if(err){
    		res.status(500)
    	}
    	res.status(200).json(token)
    })
   });

}

module.exports = {
	register,
	find,
	login,
	setAccessToken
}