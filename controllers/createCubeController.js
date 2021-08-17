const Cube = require("../models/Cube");

const addCubeForm = function (req, res, next) {
  res.render("create");
};

const createCube = function (req, res, next) {
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
};

module.exports = {
  addCubeForm,
  createCube
};
