const Cube = require("../models/Cube");

module.exports = indexRouter = function (req, res, next) {
    const validToken = req.cookies.token;

    Cube.find(function (err, cubes) {
        if (err) return console.error(err);
    })
        .lean()
        .then((data) => {
            // console.log(data);
            console.log("I am in the index controller", req.cookies);
            res.render("index", { cube: data, token: validToken });
        })
        .catch((err) => res.send(err));
};
