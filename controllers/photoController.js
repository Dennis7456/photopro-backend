const Photo = require('../models/photoModel');

const photo_create_photo = async (req,res) => {
    console.log(req.body);

    const photo = new Photo({
    	name: req.body.name,
    	albumId: req.body.albumId,
        category: req.body.category,
        slug: req.body.slug
    })

    photo.save()
    .then((result) => {
        res.status(201).send({
            message: "Photo uploaded successfully",
            result
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error uploading photo",
            error
        });
    });
}

const photo_filter_photos = async (req, res) => {
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
    photo_create_photo,
    photo_filter_photos
    
    
}