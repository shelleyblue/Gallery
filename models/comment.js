var mongoose = require("mongoose");

// Mongoose/Model config
// Schema setup
var commentSchema = mongoose.Schema({
    name: String,
    text: String
});

module.exports = mongoose.model("Comment", commentSchema);
