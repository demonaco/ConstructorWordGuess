
var inquirer = require('inquirer');

var prompt = require('prompt');

var correct = 


var guesses = 10

function startover(characterguess){
};

var characterGuess = function Letter(guess, letter, character, answer) {
    this.guess = process.argv[3],
        this.letter = false,
        this.character = function () {
            for (var i = 0; i < array.length; i++)
            if (this.guess === array[i]) {
                this.letter = true;
                console.log(this.letter);
            return (this.guess);
        } else {
            this.letter = false;
            guesses--;
            if (guesses === 0) {
                console.log("Sorry you lost the game!")
                startover();
            } 
        }
    }
     }
     startover();

    letter.prototype.toString = function() {
        var correct = "Correct " + this.guess;

        if this.letter = 
    }

    this.character = function () {
        if (this.guess === correct)
            this.boolean = true;
    } else {
        this.boolean = false;
    }
}

function guessSystem() {
    inquirer.prompt([
        {
            message: "What is your letter guess?"
        }

    ]).then(function (guess) {
        for (var i = 0; i < array.length; i++)
            if (guess === array[i]) {
                console.log(guess.printInfo)
            } else {
                console.log("Sorry that was incorrect")
            }
        guessSystem();
    })
}