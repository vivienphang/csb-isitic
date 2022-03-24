// Prepare card deck data
const prepareCardDeckData = function () {
  var rank = [1, 2, 3];
  var suit = ["spade", "heart", "diamond"];
  var name = ["one", "two", "three"];

  var inventory = [rank, suit, name];
  return inventory;
};

const generateDataObj = function () {
  var inventory = prepareCardDeckData();
  var rankArray = inventory[0];
  var suitArray = inventory[1];
  var nameArray = inventory[2];

  var outputInventory = [];

  for (var i = 0; i < rankArray.length; i += 1) {
    let obj = {
      rank: rankArray[i],
      suit: suitArray[i],
      name: nameArray[inventory[2][i]]
    };
    outputInventory.push(obj);
  }
  return outputInventory;
};

// Turn the above 3 arrays into Objects
const prepareCardDeckObjects = function () {
  var firstRank = {
    // Objects are defined with curly braces.
    rank: "1",
    suit: "spade",
    name: "one"
  };
  var secondRank = {
    rank: "2",
    suit: "heart",
    name: "two"
  };
  var thirdRank = {
    rank: "3",
    suit: "diamond",
    name: "three"
  };

  // Initialise index to 0 to start from the beginning of the array

  var index = 0;
  var cardDeck = function () {
  // Define loop condition to loop until index is the length of cardDeck
  for (var index = 0; index < cardDeck.length; index += 1) {
    // Access attributes of each card with dot notation.
    //console.log(cardDeck[index].name);
    // Construct a string using attributes of each card object
    var cardTitle = cardDeck[index].name + " of " + cardDeck[index].suit;
    // Log the string
    //console.log(cardTitle);
    // Increment the card index
    return cardTitle;
  };

  // Get the name of the 1st card
  cardDeck[0].name;

  // Initialise the card deck representation as an array of objects
  var cardDeck = [
    {
      name: "ace",
      suit: "hearts",
      rank: 1
    },
    {
      name: "2",
      suit: "hearts",
      rank: 2
    },
    {
      name: "3",
      suit: "hearts",
      rank: 3
    },
    {
      name: "4",
      suit: "hearts",
      rank: 4
    },
    {
      name: "5",
      suit: "hearts",
      rank: 5
    },
    {
      name: "6",
      suit: "hearts",
      rank: 6
    },
    {
      name: "7",
      suit: "hearts",
      rank: 7
    },
    {
      name: "8",
      suit: "hearts",
      rank: 8
    },
    {
      name: "9",
      suit: "hearts",
      rank: 9
    },
    {
      name: "10",
      suit: "hearts",
      rank: 10
    },
    {
      name: "jack",
      suit: "hearts",
      rank: 11
    },
    {
      name: "queen",
      suit: "hearts",
      rank: 12
    },
    {
      name: "king",
      suit: "hearts",
      rank: 13
    },
    {
      name: "ace",
      suit: "diamonds",
      rank: 1
    },
    {
      name: "2",
      suit: "diamonds",
      rank: 2
    },
    {
      name: "3",
      suit: "diamonds",
      rank: 3
    },
    {
      name: "4",
      suit: "diamonds",
      rank: 4
    },
    {
      name: "5",
      suit: "diamonds",
      rank: 5
    },
    {
      name: "6",
      suit: "diamonds",
      rank: 6
    },
    {
      name: "7",
      suit: "diamonds",
      rank: 7
    },
    {
      name: "8",
      suit: "diamonds",
      rank: 8
    },
    {
      name: "9",
      suit: "diamonds",
      rank: 9
    },
    {
      name: "10",
      suit: "diamonds",
      rank: 10
    },
    {
      name: "jack",
      suit: "diamonds",
      rank: 11
    },
    {
      name: "queen",
      suit: "diamonds",
      rank: 12
    },
    {
      name: "king",
      suit: "diamonds",
      rank: 13
    },
    {
      name: "ace",
      suit: "clubs",
      rank: 1
    },
    {
      name: "2",
      suit: "clubs",
      rank: 2
    },
    {
      name: "3",
      suit: "clubs",
      rank: 3
    },
    {
      name: "4",
      suit: "clubs",
      rank: 4
    },
    {
      name: "5",
      suit: "clubs",
      rank: 5
    },
    {
      name: "6",
      suit: "clubs",
      rank: 6
    },
    {
      name: "7",
      suit: "clubs",
      rank: 7
    },
    {
      name: "8",
      suit: "clubs",
      rank: 8
    },
    {
      name: "9",
      suit: "clubs",
      rank: 9
    },
    {
      name: "10",
      suit: "clubs",
      rank: 10
    },
    {
      name: "jack",
      suit: "clubs",
      rank: 11
    },
    {
      name: "queen",
      suit: "clubs",
      rank: 12
    },
    {
      name: "king",
      suit: "clubs",
      rank: 13
    },
    {
      name: "ace",
      suit: "spades",
      rank: 1
    },
    {
      name: "2",
      suit: "spades",
      rank: 2
    },
    {
      name: "3",
      suit: "spades",
      rank: 3
    },
    {
      name: "4",
      suit: "spades",
      rank: 4
    },
    {
      name: "5",
      suit: "spades",
      rank: 5
    },
    {
      name: "6",
      suit: "spades",
      rank: 6
    },
    {
      name: "7",
      suit: "spades",
      rank: 7
    },
    {
      name: "8",
      suit: "spades",
      rank: 8
    },
    {
      name: "9",
      suit: "spades",
      rank: 9
    },
    {
      name: "10",
      suit: "spades",
      rank: 10
    },
    {
      name: "jack",
      suit: "spades",
      rank: 11
    },
    {
      name: "queen",
      suit: "spades",
      rank: 12
    },
    {
      name: "king",
      suit: "spades",
      rank: 13
    }
  ];

  var inventory = [name, suit, rank];
  return inventory;
};

// Function to get random index
var randomCardDeck = function (max) {
  return Math.floor(Math.random() * max);
};
// Shuffle the deck
var shuffleCards = function (cardDeck) {
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    var randomIndex = randomCardDeck(cardDeck.length);
    var randomCard = cardDeck[randomIndex];
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cardDeck;
};

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(cardDeck);

var main = function (input) {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var followObjectsMain = function (input) {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
