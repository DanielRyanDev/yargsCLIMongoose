require("./db/connection");
const { Mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, findMovie, deleteMovie, updateList } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        let movieObj = {title: args.title, actor: args.actor, rating: args.rating}
        if (args.add) {
            await addMovie(movieObj);
            //run add movie functionality
        } else if (args.find) {
            await findMovie(movieObj)
        }

        else if (args.update) {
            console.log("SHWEEEEEOOPOOOOOOP")
            await updateList();
        }
        
        else if (args.delete) {
            let movieObj = {title: args.title}
            console.log("Whey!")
            await deleteMovie(movieObj);
        }   
        
        else {
            console.log("Incorrect command");
            Mongoose.disconnect();
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);