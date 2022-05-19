var express = require("express");
var router = express.Router();
const attachAccFormRouter = require('../controllers/attachAccController').attachAccFormRouter;
const attachAcc2Cube = require('../controllers/attachAccController').attachAcc2Cube;

/* GET users listing. */
router
  .get("/:id", attachAccFormRouter)
  .post("/:id", attachAcc2Cube);

module.exports = router;
