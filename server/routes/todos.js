const router = require('express').Router();
const controller = require('../controllers/todos')

router.post('/create', controller.create)
router.post('/create/list', controller.create_list)
router.put('/update')
router.delete('/destroy')

module.exports = router