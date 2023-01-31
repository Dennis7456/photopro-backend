const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    name: String,
    user: { 
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

module.exports = mongoose.model.Album || mongoose.model("Album", AlbumSchema);