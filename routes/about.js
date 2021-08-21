var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    const validToken = req.cookies.token;

    res.render("about", { token: validToken });
});

module.exports = router;
