var express = require("express");
var router = express.Router();
const registerController = require('../controllers/registerController').getRegisterForm;

router.get('/', registerController);

module.exports = router;