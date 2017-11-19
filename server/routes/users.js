const router = require('express').Router()
const userController = require('../controllers/users')

router.post('/register', userController.register)
router.get('/me', userController.find)
router.get('/login', userController.setAccessToken, userController.login)


module.exports = router