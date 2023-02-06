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

const edit_profile = async (req, res) => {
    console.log(req);

    const filter = { email: req.user.userEmail };
    const update = {first_name: req.body.firstName, last_name: req.body.lastName, username: req.body.userName, email: req.body.email, profile_image: req.body.profileImage}
    Object.keys(update).forEach((k) => update[k] === "" && delete update[k]);
    
    User.findOneAndUpdate(filter, update)
    .then((user) => {
        res.send(user);
    })
    .catch((error) => {
        res.send(error);
    })
}

const photos_by_user = async (req, res) => {
    
}

const get_user = async (req, res) => {

    // console.log(req)
    User.findOne({ id: req.body.userId })
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(404).send(error);
    })

}


module.exports = {
    profile,
    users_index,
    edit_profile,
    get_user
    
}