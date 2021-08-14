var express = require('express');
const Accessory = require('../models/Accessory');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  Accessory.find(function (err, accessories) {
    if (err) return console.error(err);
  })
    .lean()
    .then((data) => {
      console.log(data);
      res.render("attachAccessory", { accessory: data });
    })
    .catch((err) => res.send(err));
});

module.exports = router;