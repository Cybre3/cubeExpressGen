var express = require('express');
var router = express.Router();

const detailsRouter = require("../controllers/detailsController");

router.get('/', detailsRouter);

module.exports = router;