var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var AnimeSchema = new Schema({
  // `author` must be of type String
  author: String,
  // `title` must be of type String
  title: String
  //
  
});

// This creates our model from the above schema, using mongoose's model method
var Anime = mongoose.model("Anime", AnimeSchema);

// Export the Book model
module.exports = Anime;
