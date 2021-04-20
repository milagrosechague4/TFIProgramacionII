var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET users listing. */
router.get('/usuario/:id', productController.users);

module.exports = router;
