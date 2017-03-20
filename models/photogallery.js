var mongoose = require("mongoose");

// Mongoose/Model config
// Schema setup
var gallerySchema = mongoose.Schema({
    author: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:  "Comment"
        }
    ]
});

module.exports = mongoose.model("Gallery", gallerySchema);
