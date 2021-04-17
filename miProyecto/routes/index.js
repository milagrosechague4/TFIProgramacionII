var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

/* GET home page. */ 
router.get('/', mainController.index);
router.get('/register', mainController.register)

module.exports = router;
