const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
console.log("Connected to user router")

router.post('/new', userController.newUser)
router.get('/view', userController.viewUsers)
router.get('/view/:id', userController.viewSingleUser)

module.exports = router;