var inquirer = require("inquirer");



inquirer
  .prompt([

    {
      type: "input",
      message: "GUESS A LETTER",
      name: "userGuess"
    }
    ]).then(function(inquirerResponse) {
    	
    }