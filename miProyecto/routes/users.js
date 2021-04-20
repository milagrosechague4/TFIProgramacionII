var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET users listing. */
router.get('/usuario/:id', mainController.users);

module.exports = router;
