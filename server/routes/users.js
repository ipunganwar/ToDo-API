const router = require('express').Router()
const userController = require('../controllers/users')

router.post('/register', userController.register)
router.get('/me', userController.find)


module.exports = router