const Cube = require("../models/Cube");

const getEditForm = function (req, res, next) {
    Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
    })
        .lean()
        .then((data) => {
            console.log(
                "Cube detailPage data:",
                data,
                "This cube Id:",
                req.params.id
            );
            res.render("editCubePage", { cube: data });
        })
        .catch((err) => console.log(err));
};

const editCube = function (req, res, next) {
    console.log(req.body);
    const body = req.body;

    const newCubeInfo = {
        name: body.name,
        description: body.description,
        image_URL: body.imageUrl,
        level: body.difficultyLevel,
    };

    Cube.findByIdAndUpdate(req.params.id, newCubeInfo, function (err, cube) {
        if (err) return console.error(err);
        console.log("cube updated");
    })
        .lean()
        .then((data) => {
            console.log(
                "Cube updated DB data:",
                data,
                "This cube Id:",
                req.params.id
            );
        })
        .catch((err) => console.log(err));

    res.redirect("/");
};

module.exports = {
    getEditForm,
    editCube,
};
