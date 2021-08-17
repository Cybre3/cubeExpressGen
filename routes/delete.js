var express = require("express");
var router = express.Router();
const deleteController = require('../controllers/deleteController').getDeleteForm;

router.get('/', deleteController);

module.exports = router;