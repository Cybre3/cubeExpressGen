const Cube = require("../models/Cube");

module.exports = indexRouter = function (req, res, next) {
  Cube.find(function (err, cubes) {
    if (err) return console.error(err);
  })
    .lean()
    .then((data) => {
      console.log(data);
      res.render("index", { cube: data });
    })
    .catch((err) => res.send(err));
};
