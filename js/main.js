var secretNumber = Math.floor((Math.random() *100) + 1);
var guess = Number(prompt("choose a number from 1 - 100"));
var guesses = 1;
var tries = 10;

while(guess != secretNumber) {
	document.write(guesses);
	if(guesses >= tries) {
		document.write("you lose");
		break;
	}else if(guess > secretNumber) {
		guesses++;
		guess = prompt("Guess Lower");
	}else if (guess < secretNumber) {
		guesses++;
		guess = prompt("Guess Higher");
	}
}
if(guesses < tries) {
	document.write(" You got it, and it only took you " + guesses + " guesses");
}