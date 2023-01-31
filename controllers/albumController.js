const Album = require('../models/albumModel');

const album_create_album = async (req,res) => {
    console.log(req.body);

    const album = new Album({
    	name: req.body.name,
    	user: req.body.userId
    })

    album.save()
    .then((result) => {
        res.status(201).send({
            message: "Album created successfully",
            result
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error creating album",
            error
        });
    });
}

const album_my_albums = async (req, res) => {
    console.log(req);
    Album.find({user: req.user.userId})
    .then((album) => {
        res.status(200).send(album);
        console.log(album);
    })
    .catch((error) => {
        res.status(404).send(error);
        console.log(error);
    });
}
module.exports = {
    album_create_album,
    album_my_albums
    
}