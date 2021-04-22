var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

/* GET users listing. */
router.get('/:id', mainController.users);
router.get('/profile-edit/:id', mainController.userEdit)

module.exports = router;
