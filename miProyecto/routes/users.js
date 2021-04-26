var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
//router.get('/', userController.perfil)
router.get('/:id', userController.users);
router.get('/profile-edit', userController.userEdit)

module.exports = router;
