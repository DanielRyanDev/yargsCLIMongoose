require("./db/connection");
const { Mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, findMovie, deleteMovie, updateList } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        let movieObj = {title: args.title, actor: args.actor, rating: args.rating}
        if (args.add) {
            await addMovie(movieObj);
        }   else if (args.find) {
                await findMovie(movieObj)
        }   else if (args.update) {
                await updateList();
        }   else if (args.delete) {
                let movieObj = {title: args.title}
                await deleteMovie(movieObj);
        }   else {
                console.log("Incorrect command");
                Mongoose.disconnect();
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);