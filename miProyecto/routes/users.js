var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.index)
router.get('/:id', userController.show);
router.get('/profile-edit/:id', userController.update)

module.exports = router;
