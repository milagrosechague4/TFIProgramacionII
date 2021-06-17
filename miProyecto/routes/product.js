var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET home page. */ 
//router.get('/', productController.index);
router.get('/add', productController.productAdd)
//router.get('/edit/:id', productController.edit)
router.get('/:id', productController.show )
router.post('/add',upload.single("imagen"), productController.store)
router.post('/edit',upload.single("imagen"), productController.update)
router.post('/destroy',productController.destroy)

module.exports = router;