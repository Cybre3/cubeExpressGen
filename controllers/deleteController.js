const Cube = require("../models/Cube");

const getDeleteForm = function (req, res, next) {

    Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
    })
        .lean()
        .then((data) => {
            console.log(
                "Cube to delete data:",
                data,
                "This cube Id:",
                req.params.id
            );
            res.render("deleteCubePage", { cube: data });
        })
        .catch((err) => console.log(err));
};

const deleteCube = function (req, res, next) {

    Cube.findByIdAndRemove(req.params.id, function (err, cube) {
        if (err) return console.log(err);
        console.log("Cube was deleted", cube);
    }).lean();

    res.redirect('/');
};

module.exports = {
    getDeleteForm,
    deleteCube,
};
