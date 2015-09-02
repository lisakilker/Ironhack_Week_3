var fs = require ("fs");

function print (error, content) {
	if (error) {
			console.log ("Oh no! Error!");
	} else {
			var result = "";
			var lines = content.split('\n')
		for (var i = 0; i<lines.length; i++) {
			console.log("Line" + [i+1] + " " + lines[i]);
		}
	}
}

fs.readFile("file.txt", "utf8", print);
