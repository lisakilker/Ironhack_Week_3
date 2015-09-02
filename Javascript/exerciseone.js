// function eat(food){
// 	if (food === "Cookies") {
// 		console.log("I love cookies!");

// 	} else if (food === "Pizza") {
// 		console.log("Pizza is great!");

// 	} else {
// 		console.log("Ok, if you're sure.");
// 	}
// }

// eat("donuts")
// ___________________________________
// var i = 0;

// while (i <= 42) {
// 	i++;
// 	console.log(i);
// }
// _____________________________________________
// var a = [1,2,3,4];

// function myLog(x) {
// 	console.log(x);
// }
// myForEach(a, myLog);

// function myForEach(arr, func) {
// 	for (var i=0; i<arr.length; i++) {
// 		func(arr[i]);
// 	}
// }
// _____________________________________________
// var obj = {
// 	food: "pizza",
// 	amount: 7438
// };

// console.log(obj.amount + obj.food);
// _____________________________________________

var string = "80:70:90:100:300000";

function average(string) {  // takes numbers, splits by : and prints avg
	
	var numbers_string = string.split(":");

	var sum = 0;
	for (var i=0; i < numbers_string.length; i++) {
		sum += parseInt(numbers_string[i]);
	}
	return (sum / numbers_string.length);
}

console.log(average(string));














