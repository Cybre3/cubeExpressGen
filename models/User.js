const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"],
    },

    // userSchema.methods.generateAuthToken = async function() {...

});

const User = mongoose.model('User', userSchema);

module.exports = User;