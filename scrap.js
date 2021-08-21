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
