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
     required: "Title is Required",
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
   Anime: [{
     type: Schema.Types.ObjectId,
     ref: "Anime"
   }]
   // ,
   // books: [
   //   {
   //     type: Schema.Types.ObjectId,
   //     ref: "Book"
   //   }
   // ]
 });

 // This creates our model from the above schema, using mongoose's model method
 var categories = mongoose.model("categories", categoriesSchema);

 // Export the Library model
 module.exports = categories;

// //to update a specific id
//  db.categories.update({
//    _id: ObjectId("5b14ac49e1953dc28b886f17")
//  }, {
//    $push: {
//      "Books": [
//        "Sci-fi",
//        "Authors",
//        "Random"
//      ]
//    }
//  })

//  //to remove a specific id use this
//  db.categories.remove({
//   _id: ObjectId("5b214b70b84ec3a2fa14f685")
// })