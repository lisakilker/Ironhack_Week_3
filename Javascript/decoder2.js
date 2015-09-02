var decode = require("./decorder.js");

var sentence = "this is the sentence";

superDecode(sentence, "even-backwards");

function super_decoder(sentence, OptionStr) {

	var words = sentence.split(" ");
	var opts = optionStr.split("-");
	var choose = opts[0];
	var direction = opts[1];

		if (choose === "even") {
		words = words.filter(function(word, idx) {
		return idx % 2 == 1;
	});
}		else if (choose === "odd") {
		words = words.filter(function(word, idx) {
		return idx % 2 == 0;
	});		
}
		if (direction === "backwards") {
			words = words.reverse();
	}
		return decode(words);
}

word = words.reverse
console.log(even);
console.log(odd);
module.exports = decoder.js







