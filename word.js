var words = ['gibson', 'fender', 'ibanez', 'jackson', 'washburn', 'dean', 'scheter', 'univox', 'paul reed smith'];

console.log("this works");


var words = words[Math.floor(Math.random() * words.length)];
	console.log(words);


// var currentWord = function(words) {
// 	this.currentWord = words;
// 	this.Guessedletters = [];
// };

module.exports = {words : words};
console.log(words);

// 	this.correctLetters = function() {
// 		for (var i = 0; i < this.currentWord.Length; i++) {
// 			var correctLetter = new Letter(this.currentWord[i]);
// 			this.Guessedletters.push(correctLetter);
// 		}
// 	};
// };