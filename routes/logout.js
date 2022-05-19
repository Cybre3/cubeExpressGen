var express = require("express");
var router = express.Router();
const logoutController = require('../controllers/logoutController').logout;

router.get('/', logoutController);

module.exports = router;