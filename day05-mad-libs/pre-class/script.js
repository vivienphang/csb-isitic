// Store guesses in a global array that persists across Submits.
var guesses = [];

var rollDice = function () {
  return 6;
};

var followArraysMain = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  var myOutputValue = "hello world";

  var array = [1,2,3,4,5,6,7,8];
  for (var i=0; i<array.length, i+=1) {
  console.log(array[i]);
}

  return myOutputValue;
};
