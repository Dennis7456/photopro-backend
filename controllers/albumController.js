const Album = require('../models/albumModel');
const Photo = require('../models/photoModel');
const User = require('../models/userModel');

const album_create_album = async (req,res) => {
    console.log(req.body);

    const album = new Album({
        name: req.body.name,
        description: req.body.description,
        user: req.user.userId,
        cover: req.body.slug
    })

    const photo = new Photo({
        name: "default",
        category: "happy",
        slug: req.body.slug
    })
    photo.save();

    album.photos.push(photo);
    album.save()
    .then((result) => {
        res.status(201).send({message: "Album created successfully", result});
    })
    .catch((error) => {
        res.status(500).send({message: "Error creating album", error});
    })

    const userById = await User.findOne({ id: req.user.userId });
    userById.albums.push(album)
    userById.photos.push(photo)
    userById.save()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error);
    })
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

// const album_update_album = async (req, res) => {
    
//     console.log(req.body);
//     Album.updateOne({
//         albumId: req.body.albumId
//     }, { photos: req.body.photos }, { upsert: true })
//     .then((album) => {
//         res.status(200).send(album);
//         console.log(album)
//     })
//     .catch((error) => {
//         res.status(404).send(error);
//         console.error(error);
//     });
// }

const getAllPhotos = async (req, res) => {
    console.log(req.body);
    let foundAlbum = await Album.find({ _id: req.body.albumId })
    .populate("photos");
    res.json(foundAlbum);
    // console.log(req.body);

    // Album.find({ _id: req.body.albumId })
    // .populate("photos")
    // .the((album) => {
    //     res.send(album);
    // })
    // .catch((error) => {
    //     res.send(error);
    // })
}

const getUserAlbums = async (req, res) => {

    console.log(req.body)
    Album.find({user: req.body.userId})
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(404).send(error);
    })
}

module.exports = {
    album_create_album,
    album_my_albums,
    getAllPhotos,
    getUserAlbums
    
    
}