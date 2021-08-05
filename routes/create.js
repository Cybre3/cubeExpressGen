var express = require("express");
var router = express.Router();
const Cube = require("../models/Cube");

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    res.render("create");
  })
  .post("/", function (req, res, next) {
    let body = req.body;

    const newCube = new Cube({
      name: body.name,
      description: body.description,
      image_URL: body.imageUrl,
      level: body.difficultyLevel,
    });

    // console.log(newCube);

    newCube.save(function (err, newCube) {
      if (err) return;
      console.log("New cube created", newCube);
    });
    // .then((response) => console.log(response))
    // .catch((err) => console.log(err));
    res.redirect("/");
    // res.send('working');
  });

module.exports = router;
