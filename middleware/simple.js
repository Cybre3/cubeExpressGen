// const middle = function (req, res, next) {
//     console.log('middleware woking');
// }
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
    let authToken = "";
    // Check if token is valid

    const body = req.body;

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
        console.log("This is userDb password match", userDbmatch.password);

        // const validPasswordMatch =
        const matchPassword = await bcrypt
            .compare(userLoginPassword, userDbmatch.password)
            .then((validPass) => validPass)
            .catch((err) => err);

        console.log(matchPassword); // true

        const payloads = {
            _id: userDbmatch._id,
            username: userDbmatch.username,
        };
        const options = { expiresIn: "2d" };
        const secretKey = userDbmatch.password;
        const token = jwt.sign(payloads, secretKey, options);
        // res.redirect("/");

        authToken = token;
        console.log("This is the token", token);
        
        
        res.cookie("token", authToken)
        res.cookie("username", userDbmatch.username);

        const decodedToken = jwt.verify(authToken, secretKey);
        console.log("The decoded token", decodedToken);
    } catch (err) {
        console.log(err);
    }

    console.log("this is auth token", authToken);

    next();
    res.redirect("/");
};

module.exports = { auth };

// module.exports = {
//     middle
// }

// (err, res) => {
//     if (err) return console.error(err);

//     // authToken = token;
//
// }
// );
