function decode(words) {

	var secret = "";

	for (var i=0; i<words.length; i++) {
		var word = words[i];
		var charIndex = i % 5;
		var letter = word.charAt(charIndex);
		secret += letter;
	}
		return secret;
}

var secret = decode (["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"]);
console.log(secret);

var secret = decode (["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"]);
console.log(secret);