const mongoose = require('mongoose');

const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please enter your first name"],
        unique: false

    },
    last_name: {
        type: String,
        required: [true, "Please enter your last name"],
        unique: false
    },
    username: {
        type: String,
        lowercase: true,
        required: [true, "Please enter your username"],
        match: [/^[a-zA-Z0-9]+$/, "Username is invalid"],
        index: true,
        unique: [true, "Username is taken"]
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "Please enter an email"],
        match: [emailFormat, "Email is invalid"],
        unique: [true, "Email exists"]
    },
    bio: {
        type: String,
        required: false,
        unique: false
    },
    image: {
        type: String,
        required: false,
        unique: false
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        unique: false
    }
}, {timestamps: true});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);