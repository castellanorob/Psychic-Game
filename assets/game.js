
// Variables for wins, losses, computer guess

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var letterIndex = "";
var remainingGuesses = 9;
var userGuess = "";
var computerGuess = "";


// Function for computer picking a random letter from the array

var computerGuess = letters[Math.floor(Math.random()*
		letters.length)];

document.onkeyup = function() {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


		console.log(computerGuess)

	if (userGuess == computerGuess) {
		alert("You win!");
		wins++;

	}

	if (userGuess != computerGuess) {
		alert("Try again");
		remainingGuesses--;

	}

	if (remainingGuesses == 0) {
		alert("You lack clairvoiance");
		
	}

// Function for logging and displaying user guesses

// Function for counting down remaining guesses

// Function for calculating wins and losses

// Function displaying wins, losses, letters guessed, remaining guesses in html

	var html = "<p>Guess which letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses left: " + remainingGuesses + "</p>" +
	"<p>Your guesses so far: " + userGuess + "</p>" 

	document.querySelector('#game').innerHTML = html;

};
