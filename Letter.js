
var inquirer = require('inquirer');

var prompt = require('prompt');

var correct = 

var guess = process.argv[3]

var guesses = 10

var characterGuess = function Letter(guess, boolean, answer, character) {
    this.guess = "",
        this.boolean = true,
        this.answer = function () {
            return this.guess
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