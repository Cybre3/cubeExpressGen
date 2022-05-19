const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
        minlength: [5, "Username must be 5 characters long"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be 8 characters long"],
    },
});

userSchema.statics.userExists = async function () {};

userSchema.statics.confirmPasswordMatch = async function () {};

userSchema.methods.generateAuthToken = async function () {};

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
