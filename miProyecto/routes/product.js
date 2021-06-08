var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET home page. */ 
//router.get('/', productController.index);
router.get('/add', productController.productAdd)
router.get('/edit', productController.edit)
router.get('/:id', productController.show )
router.post('/add', productController.store)

module.exports = router;