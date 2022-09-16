const express = require('express');
const router = express.Router();
const bookingControllers = require('../controllers/bookingControllers')
console.log("Connected to booking route")

router.post('/new', bookingControllers.book)
router.get('/view', bookingControllers.view)

module.exports = router;