const Cube = require("../models/Cube");
const User = require("../models/User");

const addCubeForm = function (req, res, next) {
  res.render("create");
};

const createCube = async function (req, res, next) {
  let body = req.body;
  const username = req.cookies.username;
  // console.log(req)
  
  // const decodedToken = jwt.verify(authToken, secretKey);

  const creator = await User.findOne({username: username}).lean();

  const newCube = new Cube({
    name: body.name,
    description: body.description,
    image_URL: body.imageUrl,
    level: body.difficultyLevel,
    creatorId: creator._id
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
