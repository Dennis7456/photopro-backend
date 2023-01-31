const mongoose = require('mongoose');

const PhotosSchema = new mongoose.Schema({
    name: String,
    albumId: mongoose.Schema.Types.ObjectId, ref: 'Albums',
    slug: String
});

module.exports = mongoose.model.Photos || mongoose.model("Photos", PhotosSchema);