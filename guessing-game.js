
function guessingGame() {
    let randomNum = Math.floor(Math.random() * 100);
    let attempts = 0;
    let hasWon = false;

    return function (guess) {
        if (hasWon) {
            return "The game is over, you already won!"
        }

        attempts++;

        if (guess === randomNum) {
            hasWon = true;
            return `You win! You found ${randomNum} in ${attempts} guesses.`
        } else if (guess < randomNum) {
            return `${guess} is too low!`
        } else {
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
