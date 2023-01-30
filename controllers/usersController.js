const User = require("../models/userModel");

const profile = async (req,res) => {
    console.log(req.user.userEmail);
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

module.exports = {
    profile
    
}