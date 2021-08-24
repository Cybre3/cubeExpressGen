const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getLoginForm = function (req, res, next) {
    res.render("loginPage");
};

const loginUser = async function (req, res, next) {

   
    console.log('login user function');
    console.log(req.body);
    // console.log('this is the atuhtoken', authToken);
    res.redirect("/");
    
};

module.exports = {
    getLoginForm,
    loginUser,
};

  // const salt = await bcrypt.genSalt();
    // body.password = await bcrypt.hash(body.password, salt);
    

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

        
       
        // res.redirect("/");