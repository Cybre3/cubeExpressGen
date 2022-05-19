var express = require('express');
var router = express.Router();

const detailsRouter = require("../controllers/detailsController");

router.get('/:id', detailsRouter);

module.exports = router;