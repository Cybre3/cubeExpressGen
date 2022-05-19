var express = require("express");
var router = express.Router();
const addCubeForm = require('../controllers/createCubeController').addCubeForm;
const createCube = require('../controllers/createCubeController').createCube;

/* GET users listing. */
router
  .get("/", addCubeForm)
  .post("/", createCube);

module.exports = router;
