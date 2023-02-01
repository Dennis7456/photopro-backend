const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    name: String,
    description: String,
    user: { 
        type: Schema.Types.ObjectId, ref: 'User'
    },
    photos: [
    { type: Schema.Types.ObjectId, ref: 'Photo'}
    ]
});

module.exports = mongoose.model.Album || mongoose.model("Album", AlbumSchema);