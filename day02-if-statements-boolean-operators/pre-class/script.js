// function that takes in two names, and returns a message
var orangejuiceRequired = function (numOfGuests, numofGlassesPerGuest) {
  var totalOrangeJuice = numOfGuests * numofGlassesPerGuest;
  var message = `I need a total of ${totalOrangeJuice} glasses of oranges for my ${numOfGuests} guests tonight.`;
  return message;
};

var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// function that takes in one name
var estimatePaintPrice = function (paintPerLitre, numOfRoom, numOfCoat) {
  var totalPaintArea = numOfRoom * (3 * 3);
  var coveragePerLitre = 17.3 * paintPerLitre * numOfCoat;

  var message = `The total cost to paint ${numOfRoom}room(s) of ${totalPaintArea}m amounts to SGD${coveragePerLitre}.`;

  return message;
};

var rollDice = function (rigged = false) {
  // Rig dice to return to 6 in debug mode
  if (rigged) {
    console.log("rigged dice, returning 6");
    return 6;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber1 = rollDice((rigged = true));
  var randomDiceNumber2 = rollDice((rigged = true));

  // Personalise the output
  var myOutputValue = `You just rolled a ${randomDiceNumber1} and ${randomDiceNumber2}. Your guess was ${input}.`;
  //var difference = input - randomDiceNumber;
  //console.log("the difference is " + difference);

  // Set variable for matchedFirstRoll and matchedSecondRoll
  var matchedFirstRoll = input == randomDiceNumber1;
  var matchedSecondRoll = input == randomDiceNumber2;

  // If any of the following are true, the user wins.
  // The guess equals the dice roll
  // The guess plus one equals the dice roll
  // The guess minus one equals the dice roll
  if (matchedFirstRoll && matchedSecondRoll) {
    myOutputValue = "You Win.";
  } else {
    myOutputValue += " You Lose. Sorry.";
  }
  // Return and print output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "The door shall not open again. ";
  // If input is our secret phrase, change the value of myOutputValue
  if (input != "palatable papaya") {
    myOutputValue = "The door shall not open";
  } else if (input == "not so palatable papaya") {
    myOutputValue += "Almost... there! Keep trying.";
  } else {
    myOutputValue += " Congrats! You got the secret phrase.";
  }
  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";

  // Return and print output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
