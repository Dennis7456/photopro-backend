const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//login user
const login = async (req, res) => {
    console.log(req.user);
    User.findOne({ email: req.body.email })
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {
            if(!passwordCheck){
                return res.status(400).send({
                    message: "Wrong Password",
                    error
                });
            }

            //create JWT Token
        const token = jwt.sign(
            {
                userId: user._id,
                userEmail: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h"}
        );

        //return success response
        res.status(200).send({
            message: "Login successful",
            email: user.email,
            token
        });
        })
        .catch((error) => {
            res.status(400).send({
                message: "Wrong password",
                error
            })
        });
    })
    .catch((error) => {
        res.status(404).send({
            message: "Email not found",
            error
        });
        console.log(error);
    });
}

module.exports = {
    login
}