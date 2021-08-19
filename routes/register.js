var express = require("express");
var router = express.Router();
const registerController = require('../controllers/registerController').getRegisterForm;
const createNewUser = require('../controllers/registerController').sendNewUser;

router.get('/', registerController);
router.post('/', createNewUser);

module.exports = router;