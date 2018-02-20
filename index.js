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
  if(inquirerResponse = answerArray) {
    console.log('working')
}else {
  console.log(error);
}

});
