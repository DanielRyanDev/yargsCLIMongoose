const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not Specified",
        required: false,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: "Not Specified",
        required: false,
    }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;