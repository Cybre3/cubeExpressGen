const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");
const mongoose = require("mongoose");

const attachAccFormRouter = async function (req, res, next) {
  console.log("the param is " + req.params.id);

  try {
    const accessories = await Accessory.find(function (err, accessories) {
      if (err) return console.error(err);
      return accessories;
    }).lean();

    const cube = await Cube.findById(req.params.id, function (err, cube) {
      if (err) return console.error(err);
      return cube;
    }).lean();

    res.render("attachAccessory", { cube: cube, acc: accessories });

    console.log("the cube:", cube, "All accessories", accessories);
  } catch (err) {
    console.log(err);
  }
  //   res.render("attachAccessory", { accessory: data });
  // })
  // .catch((err) => res.send(err));
};

const attachAcc2Cube = async function (req, res, next) {
  const selectedAcc = req.body.accessory;
  console.log("The selected accessory is:", selectedAcc);
  // console.log(req.params)
  try {
    const accessory = await Accessory.find(
      { name: selectedAcc },
      function (err, accessories) {
        if (err) return console.error(err);
        return accessories;
      }
    ).lean();

    // console.log("Selected accessory obj:", accessory);

    const cube = await Cube.findById(req.params.id, function (err, cube) {
      // cube.accessories.push(accessory[0]._id);
      console.log("Accessory added", accessory[0]._id);
      // console.log(cube);
    }).updateOne({accessories: accessory[0]._id});
    // Cube.findById(req.params.id).populate("accessories").exec((err, accessories) => {
    //   console.log(accessories.name);
    // });

    // .exec(function (err, cubes) {
    //   if (err) return console.log(err);
    //   console.log(cubes);
    // });
    // console.log("Current cube:", cube);
    // res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  attachAccFormRouter,
  attachAcc2Cube,
};
