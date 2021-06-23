var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

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

/* GET users listing. */
//router.get('/', userController.index);
router.get('/perfil/:id', userController.index);
router.get('/profile-edit/:id', userController.edit);
router.post('/edit', upload.single("imagen"), userController.update)
router.post('/register',userController.register);
router.post('/login', userController.login)
router.post('/ingresar', userController.ingresar)
router.post('/logout', userController.logout)

module.exports = router;
