var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
//router.get('/', userController.index);
router.get('/:id', userController.index);
router.get('/profile-edit/:id', userController.update);
router.post('/register',userController.register);

module.exports = router;
