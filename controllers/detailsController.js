const Cube = require("../models/Cube");
const qs = require('querystring');

module.exports = detailsRouter = function (req, res, next) {
  // Cube.findById(_id, function (err, cube) {
  //     console.log(cube);
  // });
  console.log(req.originalUrl)
  res.send("working");
};
