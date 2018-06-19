$( document ).ready(function() {

var intervalId;

// 1: Start Button Interactions
// ======================
//Trigger when user clicks the Guest Start button
$("#Guest").on("click", function () {
  GuestStart();
});
//Trigger when user clicks the Login Start button
$("#Login").on("click", function () {
  GuestStart();
  // LoginStart();
});
$("#newQuestion").on("click", function () {
  newQuestion();
  forEach(function($("#newQuestion")) {
    let add = 0;
    // $("#newQuestion").
    console.log($("#newQuestion") + add++)
  }
});

function GuestStart() {
  //clearInterval(intervalId);
  //intervalId = setInterval(decrement, 1000);
  $("#Guest").addClass("hidden");
  $("#Login").addClass("hidden");
  $("#Newtrivia").removeClass("hidden");

  $.getJSON("/categories", function (data) {
    // Call our function to generate category button choices
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

function displayCategories() {
  //create a new for loopt ha loops through the nested array and print outs the corresponding buttons
  smasht.forEach(function (categories) {
      // First, empty the table
      $("tbody").empty();
      let newButton = $('<button>' + b[i] + '</button>');
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

function newQuestion() {
  event.preventDefault();
  let text = "'text'";
  let form = "'form-control'";
  let question = "'question'";
  let newQuestion = "'New Question'"
  let newButton = $("<input type=" + text + "class=" + form + "id=" + question + "placeholder=" + newQuestion + ">" + "</input>");
  // console.log(newButton);
  $('#newQuestionHolder').append(newButton);
}
//Last Document ready quotations
});