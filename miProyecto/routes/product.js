var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET home page. */ 
//router.get('/', productController.index);
router.get('/add', productController.store)
router.get('/edit', productController.edit)
router.get('/:id', productController.show )

module.exports = router;