var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

/* GET home page. */ 
router.get('/', mainController.index);
router.get('/register', mainController.create);
router.get('/login', mainController.show);
router.get('/buscador', mainController.search);

module.exports = router;
