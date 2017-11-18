const router = require('express').Router();
const tasksController = require('../controllers/tasks')

router.delete('/delete/:id', tasksController.destroy)
router.get('/find', tasksController.find)
router.post('/add', tasksController.add)
router.put('/update/:id', tasksController.update )
router.get('/find/:id', tasksController.findbyid )

module.exports = router