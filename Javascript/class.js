// var Car = function(brand, speed) {
// 	this.brand = brand;
// 	this.speed = speed;

// 	this.display_description = function() {
// 		console.log("A " + this.brand + " goes " + this.speed + " MPH.");
// 	}
// }

// var car = new Car("Mercedes", 150);
// car.display_description();

var Car = function(brand, speed); {

	this.brand = brand
	this.speed = 0

	this.accelerate = function (increment) {
		this.speed += increment;
	}

	this.brake = function (decrement) {
		if (decrement <= this.speed) {
			this.speed -= decrement;
		{}
		}		
	}

	this.printState = function() {
		console.log(this.brand + "running at" + this.speed);
	}
}

var car1 = new Car ("BMW");