var express = require('express');
var router = express.Router();
var controller = require('../controllers/authController');

router.get('/', controller.main);
router.get('/login', controller.main);
router.post('/signin', controller.passportLocal, controller.signInSuccess);

module.exports = router;