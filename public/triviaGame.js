var intervalId;

// 1: Start Button Interactions
// ======================

// When user clicks the Start button,
$("#Guest").on("click", function () {
  GuestStart();
});

$("#Login").on("click", function () {
  GuestStart();
  // LoginStart();
});

function GuestStart() {
  //clearInterval(intervalId);
  //intervalId = setInterval(decrement, 1000);

  $("#Guest").addClass("hidden");
  $("#Login").addClass("hidden");

  $.getJSON("/categories", function (data) {
    // Call our function to generate a table body
    displayCategories(data);
  });

  Decrement();
}

function LoginStart() {
  //clearInterval(intervalId);
  //intervalId = setInterval(decrement, 1000);

  $("#Guest").addClass("hidden");
  $("#Login").addClass("hidden");

  $.getJSON("/categories", function (data) {
    // Call our function to generate a table body
    displayCategories(data);
  });

  Decrement();
}

function Decrement() {
  let number = 30;
  number--;

  //$("#timer").html("<h3>" + "Remaining Time:" + number + "</h3>");

  // if (number < 0) {
  //   Stop();
  // }
}

function Stop() {
  clearInterval(intervalId);
  alert("Time's Up! Try Again!");
  var newButton = $('<button>' + "Restart?" + '</button>');
  $('.card-body').html(newButton);
  $(newButton).addClass(" btn btn-warning btn-xs restart")

  $(".restart").on("click", function () {
    start();
  })
}

function displayCategories(title) {
  //create a new for loopt ha loops through the nested array and print outs the corresponding buttons

  smasht.forEach(function (categories) {
      // First, empty the table
      $("tbody").empty();
      var newButton = $('<button>' + b[i] + '</button>');

      $(newButton).addClass("pop1 btn btn-primary btn-xs");
      $('#tbody').append(categories.title);
      $('tbody').append(newButton);
    }


    // // First, empty the table
    // $("tbody").empty();
    // // Then, for each entry of that json...+
    // animals.forEach(function (animal) {
    //   // Append each of the animal's properties to the table
    //   $("tbody").append("<tr><td>" + animal.name + "</td>" +
    //     "<td>" + animal.numLegs + "</td>" +
    //     "<td>" + animal.class + "</td>" +
    //     "<td>" + animal.weight + "</td>" +
    //     "<td>" + animal.whatIWouldReallyCallIt + "</td></tr>");
    // });
  )
}