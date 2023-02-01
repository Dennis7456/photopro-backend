const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    photos: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}
    ]
});

module.exports = mongoose.model.Category || mongoose.model("Category", CategorySchema);