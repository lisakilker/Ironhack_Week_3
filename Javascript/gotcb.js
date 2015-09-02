function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    console.log(episodes[0].title)
}

module.exports = fileActions

// function fileactions(err, file){ 
    
// 	var str = '{"title": "description": "rating": "episode_number"}';
//     var episodes = JSON.parse(file)
//     	if (err) {
//         throw err;
//     }

// 	} 	else {
// 			var str = "";
// 		for (var i = 0; i<lines.length; i++) {
// 		console.log(episodes[0].title) 
// 	}
// }


