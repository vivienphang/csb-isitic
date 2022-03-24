var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = " ";
  var counter = 0;
  // Continue the loop while counter is less than the input value
  while (counter < input) {
    // Add 1 "yes" to the output for every loop iteration.
    myOutputValue = myOutputValue + "yes";
    counter = counter + 1;
  }
  return myOutputValue;
};
var rollDice = function () {
  // Produces a random decimal
  var randomDecimal = Math.random() * 6;
  // Make decimal into integers
  var randomInteger = Math.floor(randomDecimal);
  // Include random integer from 0 to 5, plus one
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = " ";
  var counter = 0;
  while (counter < input) {
    // Roll dice inside the loop, generating a random dice roll each iteration
    var diceRoll = rollDice();
    // Add each dice roll to output
    myOutputValue = myOutputValue + "+ diceRoll + ";
    // Add increment counter at the end of each iteration
    counter = counter + 1;
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  if (Number.isNaN(Number(input))) {
    myOutputValue = "sorry, please enter a number.";
    console.log("input is not a number: " + input); // For developer to check
    return myOutputValue;
  }
  if (input < 2 || input > 50) {
    return "please enter a number between 2 and 50.";
  }

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < rowCounter) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "";

  for (var i = 0; i < input; i += 1) {
    // The 'i' loop runs input number of times
    for (var j = 0; j < input; j += 1) {
      // The 'j' loops runs input number of time each then 'i' increments
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";

      console.log("j :", j);
    }
    // At the end of each 'i' loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    console.log("i :", i);
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};
