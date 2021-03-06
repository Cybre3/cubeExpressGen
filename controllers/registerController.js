const bcrypt = require("bcrypt");
const User = require("../models/User");

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: "", password: "" };

    // duplicate error code
    if (err.code === 11000) {
        errors.username = "That username is already registered";
        return errors;
    }

    // validation errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const getRegisterForm = function (req, res, next) {
    console.log("These are errors", req.session.errors);
    const errors = req.session.errors;
    res.render("registerPage", { errors: errors });
};

const sendNewUser = async function (req, res, next) {
    let { username, password } = req.body;

    // if(body.repeatPassword !== body.password) {
    //     return;
    // }

    try {
        const newUser = await User.create({ username, password });
        // newUser.save();
        // console.log("New user was created", newUser);
        res.status(201).json(newUser);
        res.redirect("/");
    } catch (err) {
        const errors = handleErrors(err);
        // if (err) return;
        req.session.errors = errors;
        // res.status(400).json({ errors });
        res.redirect("/register");
    }
};

module.exports = {
    getRegisterForm,
    sendNewUser,
};
