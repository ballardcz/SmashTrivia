// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//start express
var app = express();

//Specify Connect Port
var PORT = 3000;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: true
}));
// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Get the default connection
var db = mongoose.connection;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/smasht");

mongoose.Promise = global.Promise;

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", console.error.bind(console, 'MongoDB connection error:'));
 
// When the server starts, create and save a new Library document to the db
// The "unique" rule in the Library model's schema will prevent duplicate libraries from being added to the server
db.categories.create({
    name: "categories"
  })
  .then(function (dbcategories) {
    // If saved successfully, print the new Library document to the console
    console.log(dbcategories);
  })
  .catch(function (err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });
// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
db.User.create({
    name: "Master User"
  })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err.message);
  });


// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function (req, res) {
  res.send("Hello world");
});

// hit this path, display every entry in the trivia Category collection, sorted by Questions
app.get("/categories", function (req, res) {

  db.categories.find({}).sort({
      name: 1
    }).then(function (dbcategories) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbcategories);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// 2. At the "/all" path, display every entry in the animals collection
app.get("/Anime", function (req, res) {
  // Query: In our database, go to the smasht collection, then "find" everything
  db.Anime.find({})
    .then(function (dbAnime) {
      // If any Books are found, send them to the client
      res.json(dbAnime);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});



// // Route for getting all books from the db
// app.get("/books", function (req, res) {
//   // Using our Book model, "find" every book in our db
//   db.Book.find({})
//     .then(function (dbBook) {
//       // If any Books are found, send them to the client
//       res.json(dbBook);
//     })
//     .catch(function (err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

// Route to see what library looks like WITH populating
app.get("/populated", function (req, res) {
  // Using our Library model, "find" every library in our db and populate them with any associated books
  db.categories.find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    //.populate("books", "Anime")
    .populate("Anime")
    .then(function (dbcategories) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbcategories);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for retrieving all Users from the db
app.get("/user", function (req, res) {
  // Find all Users
  db.User.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// // Route for saving a new Note to the db and associating it with a User
// app.post("/submit", function(req, res) {
//   // Create a new Note in the db
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
//     })
//     .then(function(dbUser) {
//       // If the User was updated successfully, send it back to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});