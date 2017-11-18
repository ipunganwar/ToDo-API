const router = require('express').Router()
const userController = require('../controllers/users')

router.post('/register', userController.register)
router.post('/me', userController.findOne)


module.exports = router