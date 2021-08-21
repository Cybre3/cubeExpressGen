var express = require("express");
var router = express.Router();
const editController = require('../controllers/editController').getEditForm;
const editCubeController = require('../controllers/editController').editCube;

router.get('/:id', editController);
router.post('/:id', editCubeController);

module.exports = router;