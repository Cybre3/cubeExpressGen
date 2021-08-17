var express = require("express");
var router = express.Router();
const loginController = require('../controllers/loginController').getLoginForm;

router.get('/', loginController);

module.exports = router;