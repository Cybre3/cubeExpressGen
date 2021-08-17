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
    const accessory = await Accessory.findOne(
      { name: selectedAcc },
      function (err, accessory) {
        if (err) return console.error(err);
        return accessory;
      }
    ).lean();

    console.log(accessory);
    // console.log("Selected accessory obj:", accessory);

    const cube = await Cube.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { accessories: accessory._id } },
      function (err, cube) {
        // cube.accessories.push(accessory[0]._id);

        console.log("the acces", cube);
      }
    );
    // console.log(req)
    // res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  attachAccFormRouter,
  attachAcc2Cube,
};
