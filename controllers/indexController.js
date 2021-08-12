// const { partials } = require("handlebars");
const Cube = require("../models/Cube");
const expHbs = require('express-handlebars')

module.exports = indexRouter = function (req, res, next) {
  Cube.find(function (err, cubes) {
    if (err) return console.error(err);
  }).lean()
    .then((data) => {
      console.log(data);
    //   const context = {
    //   //   cubesMongoData: data.map((cube) => {
    //   //   // return {
    //   //   //   name: cube.name,
    //   //   //   description: cube.description,
    //   //   //   image_URL: cube.imageUrl,
    //   //   //   level: cube.difficultyLevel,
    //   //   // };
    //   // });
    // }
      res.render("index", { cube: data });
    })
    // .catch((err) => res.send(err));

  // res.render("index");
};
