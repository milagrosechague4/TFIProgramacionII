var express = require('express');
var router = express.Router();
var mainController = require('../controllers/userController');

/* GET users listing. */
router.get('/', mainController.perfil)
router.get('/:id', mainController.users);
router.get('/profile-edit/:id', mainController.userEdit)

module.exports = router;
