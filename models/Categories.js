 var mongoose = require("mongoose");

 // Save a reference to the Schema constructor
 var Schema = mongoose.Schema;

 // Using the Schema constructor, create a new LibrarySchema object
 // This is similar to a Sequelize model
 var categoriesSchema = new Schema({
   // `name` must be of type String
   // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
   Title: {
     type: String,
     unique: true,
     required: [true, "Title is Required!"],
     validate: [
       function (input) {
         return input.length >= 1;
       },
       "Title should be longer."
     ]
   },
   // `books` is an array that stores ObjectIds
   // The ref property links these ObjectIds to the Book model
   // This allows us to populate the Library with any associated Books
   Anime: 
     {
     type: Schema.Types.ObjectId,
     ref: "Anime"
   }
  ,
   Books: 
     {
       type: Schema.Types.ObjectId,
       ref: "Books"
     }
   ,
   Movies: 
     {
       type: Schema.Types.ObjectId,
       ref:"Movies"
     }
 });

 // This creates our model from the above schema, using mongoose's model method
 var categories = mongoose.model("categories", categoriesSchema);

 // Export the model
 module.exports = categories;