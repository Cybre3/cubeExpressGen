const bcrypt = require("bcrypt");
const User = require("../models/User");

const getRegisterForm = function (req, res, next) {
    res.render("registerPage");
};

const sendNewUser = async function (req, res, next) {
    let body = req.body;
    console.log(body);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(body.password, salt);
    // bcrypt.hash(password, 12).then(hash => {…

    // bcrypt.hash(password, saltRounds, function(err, hash) {
    //   // Store hash in database here
    // });
    

    const newUser = new User({
        username: body.username,
        password: hash,
    });

    newUser.save(async function (err, newUser) {
        if (err) return;
        console.log("New user was created", newUser);
    });

    res.redirect("/");
};

module.exports = {
    getRegisterForm,
    sendNewUser,
};
