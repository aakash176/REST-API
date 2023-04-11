const express = require('express')

const router= express.Router()

const {getAllTask, getTaskById, deleteTask, createTask} = require('../controllers/routes')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').delete(deleteTask).get(getTaskById)

module.exports = router