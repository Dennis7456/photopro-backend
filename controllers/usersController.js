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

const user_details = async (req,res) => {
    //console.log(req);
    // User.findOne({})
}

module.exports = {
    profile,
    user_details
    
}