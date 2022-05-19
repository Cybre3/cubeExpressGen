var express = require("express");
var router = express.Router();
const deleteController = require('../controllers/deleteController').getDeleteForm;
const deleteCube = require('../controllers/deleteController').deleteCube;

router.get('/:id', deleteController);
router.post('/:id', deleteCube);

module.exports = router;