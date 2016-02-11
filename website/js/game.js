// Javascript game created by Nalani Ngoon Warde

// Variables
var mysteryNumber = 7;
var playerGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var playerScore = 0;

// Initialize the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var outputScore = document.querySelector("#outputScore");

// Button code
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click",clickHandler);

function clickHandler()
	{
		if(guessesRemaining > 0)
			{	
		playerGuess = parseInt(input.value);
	
			if(playerGuess > mysteryNumber)
					{
						output.innerHTML = "That number is too big!";
						guessesMade ++;
						guessesRemaining --;
						if(guessesMade === 1)
					{
						outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left.";
					}
			else if(guessesRemaining === 1)
					{
						outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left.";
					}
			else
					{
					outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left.";
					}		
			}
	else if(playerGuess < mysteryNumber)
		{
				output.innerHTML = "That number is too small!";
				guessesMade ++;
				guessesRemaining --;
				if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left.";
			}
			else if(guessesRemaining === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left.";
			}
			else
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left.";
			}
		}
	else if(playerGuess === mysteryNumber)
		{
			output.innerHTML = "Hooray! You won! You guessed the correct number! Now try again!";
			playerScore += guessesRemaining;
			guessesMade = 0;
			guessesRemaining = 10;
			outputScore.innerHTML = "Your current score is " + playerScore;
			mysteryNumber = Math.floor(Math.random()*100);
		}
	
	else
		{
			output.innerHTML = "Grrrr! Stop playing around, and start playing the game!";
		}
	}
	else
		{
			outputScore.innerHTML = "Your final score is " + playerScore;
			output.innerHTML = "Game over.";
		}
}