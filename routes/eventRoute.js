const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventControllers')
console.log("Connected to event router")

router.post('/new', eventController.newEvent)
router.get('/view', eventController.viewEvents)
router.get('/views/:id', eventController.viewSingleEvent)
router.put('/update/:id', eventController.updateEvent)
router.delete('/delete/:id', eventController.deleteEvent)

module.exports = router;