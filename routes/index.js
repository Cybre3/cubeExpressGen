var express = require("express");
var router = express.Router();
const Cube = require("../models/Cube");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  
  Cube.find(function (err, cubes) {
    if (err) return console.error(err);
    // for (let cube in cubes) {
      //   console.log(cubes[cube]);
      //   // res.render("cubeDiv")
      // }
      console.log(cubes);
    });
    
    res.render("index");
});

module.exports = router;
