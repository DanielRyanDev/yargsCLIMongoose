const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

exports.findMovie = async () => {
    try {
        console.log(await Movie.find({}));
    } catch (error) {
        console.log(error);
    }
}

exports.updateList = async () => {
    try {
        console.log(await Movie.updateOne({}));
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj);
        console.log(`${movieObj.title} successfully removed from database.`)
    }  catch (error) {
        console.log(error);
    }
}