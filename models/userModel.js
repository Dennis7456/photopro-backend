const mongoose = require('mongoose');
const Schema = mongoose.Schema
const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const UserSchema = new Schema({
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
    profile_image: {
        type: String,
        required: false,
        unique: false
    },
    albums: [
        {type: Schema.Types.ObjectId, ref: 'Album'}
        ],
    photos: [
        {type: Schema.Types.ObjectId, ref: 'Photo'}
        ],
    password: {
        type: String,
        required: [true, "Please enter a password"],
        unique: false
    }
}, {timestamps: true});

module.exports = mongoose.model.User || mongoose.model("User", UserSchema);