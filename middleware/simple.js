// const middle = function (req, res, next) {
//     console.log('middleware woking');
// }

const auth = async (req, res, next) => {
    // Check if token is valid
    console.log("Hello middleware is working");
    next();
};

module.exports = {auth};


// module.exports = {
//     middle
// }