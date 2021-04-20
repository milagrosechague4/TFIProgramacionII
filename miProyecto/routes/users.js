var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

/* GET users listing. */
router.get('/:id', mainController.users);

module.exports = router;
