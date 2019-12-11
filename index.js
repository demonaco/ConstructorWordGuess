var word = require("./Word.js")


function randomWord() {
    var ranArray = ["jurassic park", "toy story", "the beatles", "family guy"]
    for (i = 0; i < ranArray.length; i++);
    word(array[i]);

    function ask(){
    inquirer.prompt([
        {
            message: "What is your letter guess?"
        }

    ]).then(function (guess) {
        var guess = process.argv[3];
        for (var i = 0; i < Newletter.length; i++)
            if (guess === array[i]) {
                console.log(guess.printInfo)
            } else {
                console.log("Sorry that was incorrect")
            }
        
    })
}
ask();
}