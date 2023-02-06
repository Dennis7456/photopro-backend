const Photo = require('../models/photoModel');
const Album = require('../models/albumModel');

const photo_create_photo = async (req,res) => {
    //console.log(req.body);

    const photo = new Photo({
    	name: req.body.name,
    	albumId: req.body.albumId,
        category: req.body.category,
        slug: req.body.slug
    })

    photo.save()
    .then((result) => {
        
        res.status(201).send({
            message: "Photo created successfully",
            result
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error creating photo",
            error
        });
    });

    const albumById = await Album.findOne({ id: req.body.albumId });
    //console.log(albumById.photos);
    albumById.photos.push(photo);
    albumById.save()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);

});
};

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

const filterPhotos = async (req, res) => {
    console.log(req);
    Photo.find({ category: req.params.category })
    .then((photos) => {
        res.status(200).json(photos);
        console.log(photos);
    })
    .catch((error) => {
        res.status(404).send(error);
        console.log(error);
    });
}

const getAllPhotos = async (req, res) => {
    console.log(req);
    Photo.find()
    .then((photos) => {
        res.status(200).json(photos);
        console.log(photos);
    })
    .catch((error) => {
        res.status(404).send(error);
        console.log(error);
    });
}

module.exports = {
    photo_create_photo,
    photo_filter_photos,
    getAllPhotos,
    filterPhotos
    
    
}