const Cube = require("../models/Cube");

module.exports = detailsRouter = function (req, res, next) {
    const validToken = req.cookies.token;

    Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
    })
        .lean()
        .populate("accessories")
        .exec()
        .then((data) => {
            console.log(
                "Cube detailPage data:",
                data,
                "This cube Id:",
                req.params.id
            );
            res.render("updatedDetailsPage", { cube: data, token: validToken });
        })
        .catch((err) => console.log(err));
};
