const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    name: String,
    album: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Album'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    slug: String
});

module.exports = mongoose.model.Photo || mongoose.model("Photo", PhotoSchema);