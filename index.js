var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "GUESS A LETTER",
      name: "userGuess"
    }
    ]).then(function(inquirerResponse) {
    	
    }