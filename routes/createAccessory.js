var express = require("express");
var router = express.Router();
const Accessory = require("../models/Accessory");

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    res.render("createAccessory");
  })
  .post("/", function (req, res, next) {
    let body = req.body;

    const newAccessory = new Accessory({
      name: body.name,
      description: body.description,
      image_URL: body.imageUrl,
    });

    console.log(newAccessory);

    newAccessory.save(function (err, newAccessory) {
      if (err) return;
      console.log("New Accessory created", newAccessory);
    });

    res.redirect("/");
  });

module.exports = router;
