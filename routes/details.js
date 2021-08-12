var express = require('express');
var router = express.Router();

const deatilsRouter = require("../controllers/detailsController");

router.get('/', deatilsRouter);

module.exports = router;