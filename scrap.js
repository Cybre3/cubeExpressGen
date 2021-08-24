 // console.log("The userDb obj", userDbmatch);
    // console.log("This is userDbmatch", userDbmatch.password);

    // // const validPasswordMatch =
    //  bcrypt.compare(
    //     userLoginPassword,
    //     userDbmatch.password,
    //     (err, res) => {
    //         if (err) return console.error(err);
    //         console.log("The hashPassword match is", res); //true

    //         if (res !== true) {
    //             return;
    //         }

    //         const payloads = {
    //             _id: userDbmatch._id,
    //             username: userDbmatch.username,
    //         };
    //         const options = { expiresIn: "2d" };
    //         const secretKey = userDbmatch.password;
    //         const token = jwt.sign(payloads, secretKey, options);
    //         // res.redirect("/");
    //         console.log("This is token", token);

    //         authToken = token;

    //         const decodedToken = jwt.verify(token, secretKey);
    //         console.log("The decoded token", decodedToken);
    //     }

    //     // return res;
    // );

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

    // res.cookie("token", authToken);
    // console.log("This is the cookie", req.cookies);

//     {{#if errors}}
//      <div id="notifications">
     
// <div class="alert alert-warning" role="alert">
// {{errors}}
// </div>
//   </div>
//     {{/if}}


// userSchema.methods.generateAuthToken = async function() {
//     // Generate an auth token for the user
//     const user = this
//     const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
//     user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token

// set token as a cookie
// res.cookie("token", token, { httpOnly: true, maxAge: 10000 * 10000 });

// }

