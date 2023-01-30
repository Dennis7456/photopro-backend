const bcrypt = require('bcryptjs');
const User = require("../models/userModel");

//register user
const register = async (req, res) => {
    console.log(req.body);
    bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            username: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        })

    user.save()
    .then((result) => {
        res.status(201).send({
            message: 'User Created Successfully',
            result
        });
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error Creating User",
            error
        });
    });

    })
    .catch((error) => {
        res.status(500).send({
            message: "Password was not hashed successfully",
        })
    })
}

module.exports = {
    register
}