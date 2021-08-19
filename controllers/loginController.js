const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
var cookieParser = require("cookie-parser");

const getLoginForm = function (req, res, next) {
    res.render("loginPage");
};

const loginUser = async function (req, res, next) {
    let body = req.body;
    let authToken = '';

    // const salt = await bcrypt.genSalt();
    // body.password = await bcrypt.hash(body.password, salt);
    try {
        const userLoginPassword = body.password;

        console.log("This is the loginHashPassword", userLoginPassword);

        const userDbmatch = await User.findOne(
            { username: body.username },
            function (err, user) {
                if (err) return console.error(err);
                return user;
            }
        );
        console.log("The userDb obj", userDbmatch);
        console.log("This is userDbmatch", userDbmatch.password);

        // const validPasswordMatch =
        await bcrypt.compare(
            userLoginPassword,
            userDbmatch.password,
            async (err, res) => {
                if (err) return console.error(err);
                console.log("The hashPassword match is", res); //true

                if (res !== true) {
                    return;
                }

                const payloads = {
                    _id: userDbmatch._id,
                    username: userDbmatch.username,
                };
                const options = { expiresIn: "2d" };
                const secretKey = userDbmatch.password;
                const token = jwt.sign(payloads, secretKey, options);
                // res.redirect("/");
                console.log("This is token", token);

                authToken = token;
                res.cookie("token", await authToken);
                
                const decodedToken = jwt.verify(token, secretKey);
                console.log("The decoded token", decodedToken);
            }

            // return res;
        );

        // console.log('The valid match is', validPasswordMatch);

        // if (validPasswordMatch) {
        //     const payloads = {
        //         _id: userDbmatch._id,
        //         username: userDbmatch.username,
        //     };
        //     const options = { expiresIn: "2d" };
        //     const secretKey = userDbmatch.password;
        //     const token = jwt.sign(payloads, secretKey, options);
        //     // res.redirect("/");
        //     console.log("This is token", token);
        // }

        
        console.log("This is the cookie", req.cookies);
       
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getLoginForm,
    loginUser,
};
