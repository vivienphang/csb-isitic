// Note: Declare game modes
var GAME_START = "start";
var GAME_CARDS_DRAWN = "cards drawn";
var GAME_RESULTS_SHOWN = "results shown";

// 0. Define player and dealer by declaring variables to store player and dealer hands (ref: arrays + objects)

var playerHand = []; // input is empty, so we can manipulate their cards
var dealerHand = [];

var createDeck = function () {
  // create the empty deck for depositing all our cards
  var deck = [];
  //create a deck of cards with 4 different suits
  var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  var indexSuits = 0;
  while (indexSuits < suits.length) {
    // make a variable of the current suit
    var indexSuits = suits[indexSuits];
    // loop to create all cards in this suit
    // rank 1-13
    var rank = 1;
    while (rank <= 13) {
      var rankCounter = rank;
      var cardName = rankCounter; // this will define the card name

      // 1, 11, 12 ,13
      if (cardName == 1) {
        cardName = " Ace ";
      } else if (cardName == 11) {
        rankCounter = 10;
        cardName = " Jack ";
      } else if (cardName == 12) {
        rankCounter = 10;
        cardName = " Queen ";
      } else if (cardName == 13) {
        rankCounter = 10;
        cardName = " King ";
      }
      // make a single card object variable. this would be used for addition of cards
      var card = {
        name: cardName, // value: 'ace', 'jack', 'queen', 'king'
        suit: indexSuits, // suits: 'hearts', 'diamonds', 'spades', 'clubs'
        rank: rankCounter // value: numbers in integers
      };
      // add the card to the deck
      deck.push(card);
      rank = rank + 1; // increment the card rank
    }
    indexSuits = indexSuits + 1;
  }
  return deck;
};
var gameMode = GAME_START;
// Input function for getting randomized number
var getRandomIndex = function (numOfCards) {
  return Math.floor(Math.random() * numOfCards);
};
// Shuffle the cards to get random indexes (or values) from deck array
var shuffleCards = function (cards) {
  var index = 0; // index starts from 0 because arrays start from zero-index

  while (index < cards.length) {
    // cards.length refers to the full array length of var cards
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  console.log(cards); // check all 52 cards are present and randomized before game starts

  return cards; // return output to show randomized cards
};

var deck = shuffleCards(createDeck());
var TWENTY_ONE = 21;
// Dealer always hits until she reaches a sum greater than 16.
var dealerHitThreshold = 16;
// If player has chosen to stand, then player can no longer hit until game is over
var playerHasChosenToStand = false;
// Keep track of when the game ends to prevent further moves
var gameOver = false;

var gameMode = GAME_CARDS_DRAWN;

// Deal a card to the given hand
var dealCardToHand = function (hand) {
  hand.push(deck.pop());
};
// Generate the sum of cards in hand
var getHandSum = function (hand) {
  var numAcesInHand = 0;
  var sum = 0;
  var counter = 0;
  while (counter < hand.length) {
    var currCard = hand[counter];
    // If card is Ace, value is 11 by default
    if (currCard.rank === 1) {
      numAcesInHand += 1;
      sum += 11;
    } else {
      sum += currCard.rank;
    }
    counter = counter + 1;
  }
  // If sum is greater than sum limit and hand contains Aces, convert Aces from value of 11
  // to value of 1, until sum is less than or equal to sum limit or there are no more Aces.
  if (sum > TWENTY_ONE && numAcesInHand > 0) {
    var aceCounter = 0;
    while (aceCounter < numAcesInHand) {
      sum -= 10;
      // we use minus and equal sign to show that if total cards > 21, ace valye drops to 1
      // If the sum is less than TWENTY_ONE before converting all Ace values from
      // 11 to 1, break out of the loop and return the current sum.
      if (sum <= TWENTY_ONE) {
        break; // break keyword causes the loop to finish
      }
      aceCounter = aceCounter + 1;
    }
  }
  return sum;
};
// Return whether the hand contains a Blackjack combination
var blackjackCombi = function (hand) {
  return hand.length == 2 && getHandSum(hand) == TWENTY_ONE;
};
// Convert hand to a string where objects within the array are stringified
var convertHandToString = function (hand) {
  var cards = "";
  var handIndex = 0;
  while (handIndex < hand.length) {
    cards = cards + " " + [hand[handIndex].name];
    handIndex = handIndex + 1;
  }
  return cards;
};

var getDefaultOutput = function () {
  return `Player has: ${convertHandToString(
    playerHand
  )}. Total score: ${getHandSum(playerHand)}. <br>
    Dealer has: ${convertHandToString(dealerHand)}. Total score: ${getHandSum(
    dealerHand
  )}.`;
};

var main = function (input) {
  /*var userName = "";
  var myOutputValue = "";

  if (gameMode == "waiting for userName") {
    userName = input;
    gameMode = "GAME_START";
    myOutputValue = "Hello " + userName + '. Press "Submit" to begin playing.'
  };*/

  if (gameOver) {
    return "The game is over. Please refresh to play again.";
  }
  // If initial hands have not been dealt, deal initial hands
  else if (playerHand.length === 0) {
    // User clicks submit button to deal cards.
    // Deal first card for player then computer
    dealCardToHand(playerHand);
    dealCardToHand(dealerHand);

    // Deal second card for player then computer
    dealCardToHand(playerHand);
    dealCardToHand(dealerHand);

    // The cards are analyzed for any game winning conditions
    // If statement, return: player to win
    if (blackjackCombi(playerHand)) {
      gameOver = true;
      // player wins, return
      return `${getDefaultOutput()} <br>
        Player draws a BLACKJACK and WINS! Please refresh to play again.`;
    }

    // If computer has Blackjack and player does not, computer wins
    if (blackjackCombi(dealerHand)) {
      gameOver = true;
      // computer wins, return
      return `${getDefaultOutput()} <br>
        Dealer draws a BLACKJACK and WINS! Please refresh to play again.`;
    }

    // The cards are displayed to the user.
    return `${getDefaultOutput()} <br>
      Please enter "hit" or "stand", then press Submit`;
  }

  // Then begins a new action, where the user has to decide something: do they hit or stand.
  if (!playerHasChosenToStand) {
    // If user input is neither "hit" nor "stand" prompt user
    if (input !== "hit" && input !== "stand") {
      return 'Please input either "hit" or "stand" to continue the game';
    }

    if (input == "hit") {
      dealCardToHand(playerHand);
      // If bust, show player that she busts
      if (getHandSum(playerHand) > TWENTY_ONE) {
        gameOver = true;
        return `${getDefaultOutput()} <br>
          Player LOSES! Please refresh to play again.`;
      }
    }

    if (input == "stand") {
      playerHasChosenToStand = true;
    }
  }

  // The computer also decides to hit or stand.
  // Computer hits if sum less than or equal to dealer hit threshold
  // Otherwise, computer stays
  var dealerHandSum = getHandSum(dealerHand); // Calling out function 'getHandSum' from declaration above
  if (dealerHandSum <= dealerHitThreshold) {
    dealCardToHand(dealerHand);
    // Update computer hand sum after dealing new card
    dealerHandSum = getHandSum(dealerHand);
    // If bust, show computer that she busts
    if (dealerHandSum > TWENTY_ONE) {
      gameOver = true;
      return `${getDefaultOutput()} <br>
      Dealer LOSES! Please refresh to play again.`;
    }
  }

  // If player and computer have both not busted and chosen to stand, decide who wins
  if (playerHasChosenToStand && dealerHandSum > dealerHitThreshold) {
    // The game is always over after this point
    gameOver = true;
    // If player hand sum is greater than computer hand sum, player wins!
    if (getHandSum(playerHand) > dealerHandSum) {
      return `${getDefaultOutput()} <br>
        Player WINS! Please refresh to play again.`;
    }
    // Else, computer wins
    return `${getDefaultOutput()} <br>
      Dealer WINS! Please refresh to play again.`;
  }

  // If game is not yet over, show current game status
  return `${getDefaultOutput()} <br>
      The Player gets to choose to draw or stay. To draw, enter "hit". To stay, enter "stand".<br>
      Otherwise, enter "Stand" and press "Submit" to see Dealer's next move.`;
};
