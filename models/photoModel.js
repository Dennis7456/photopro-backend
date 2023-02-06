const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    name: String,
    album: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Album'
    },
    category: {
        type: String,
    },
    slug: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model.Photo || mongoose.model("Photo", PhotoSchema);