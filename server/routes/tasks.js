const router = require('express').Router();
const tasksController = require('../controllers/tasks')

router.delete('/remove/:id', tasksController.destroy)
router.get('/list', tasksController.list)
router.post('/add', tasksController.add)
router.put('/done/:id', tasksController.done )
router.get('/find/:id', tasksController.findbyid )

module.exports = router