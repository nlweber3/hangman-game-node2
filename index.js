var inquirer = require("inquirer");

var letter = require("./letter.js");

var word = require("./word.js");

var answerArray = [];

for(var i=0; i<word.words.length; i++) {
    answerArray[i] = "_";
   
  }
 console.log(answerArray);


inquirer
.prompt([

{
  type: "input",
  message: "GUESS A LETTER",
  name: "userGuess"
}
]).then(function(inquirerResponse) {
 this.showLetters = function() {
  if(this.letters = '') {
    this.guessedLetters = true;
  }
  else {
    this.guessedLetters = false;

  }
}
});
