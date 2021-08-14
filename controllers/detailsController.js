const Cube = require("../models/Cube");

module.exports = detailsRouter = function (req, res, next) {
  const id = req.originalUrl.split("/")[2];

  Cube.findById(id, function (err, cube) {
    if (err) return console.error(err);
  })
    .lean()
    .then((data) => {
      console.log(data, id);
      res.render("updatedDetailsPage", { cube: data });
    })
    .catch((err) => console.log(err));
};
