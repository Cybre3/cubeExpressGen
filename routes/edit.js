var express = require("express");
var router = express.Router();
const editController = require('../controllers/editController').getEditForm;

router.get('/', editController);

module.exports = router;