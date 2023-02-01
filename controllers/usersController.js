const User = require("../models/userModel");


const profile = async (req,res) => {
    console.log(req);
    User.findOne({ email: req.user.userEmail })
    .then((user) => {
        res.send(user);
    })
    .catch((error) => {
        res.status(404).send({
            message: "User Not Found",
            error
        })
        console.log(error);
    });

    const user = req.user;
}

const users_index = async (req,res) => {
    console.log(req);
    User.find()
    .then((users) => {
        res.send(users);
    })
    .catch((error) => {
        res.status(404).send({
            message: "Erro fetching users",
            error
        })
    });
}

module.exports = {
    profile,
    users_index
    
}