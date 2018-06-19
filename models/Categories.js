 const mongoose = require("mongoose");

 // Save a reference to the Schema constructor
 var Schema = mongoose.Schema;

 const categoriesSchema = new Schema({
   // `name` must be of type String
   // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
   name: String,
   
 });

 // This creates our model from the above schema, using mongoose's model method
 var categories = mongoose.model("categories", categoriesSchema);

//  categories.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

 // Export the model
 module.exports = categories;