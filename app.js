// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(categories) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  animals.forEach(function() {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + animal.name + "</td>" +
                         "<td>" + animal.numLegs + "</td>" +
                         "<td>" + animal.class + "</td>" +
                         "<td>" + animal.weight + "</td>" +
                         "<td>" + animal.whatIWouldReallyCallIt + "</td></tr>");
  });
}

// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-weight");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-name");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/name", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});



// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
  $("tbody").empty();

  //iterate through our data and create table rows for them
  data.forEach(function () {

    //create a table row
    var tr = $("<tr>");

    //create tables cells for each attribute and append to row
    for (var key in animals) {

      if ( key !== "_id") {
        //create table cell and populate with that propert/key's value
        var td = $("<td>").text(animals[key]);
        // add to tr (table row)
        tr.append(td);
      }
    }
    //append row to tbody
    $("tbody").append(tr);

  })