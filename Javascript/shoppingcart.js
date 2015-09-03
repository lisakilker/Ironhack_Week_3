var ShoppingCart = function() {

	var items = ["apple", "orange", "grape", "banana", "watermelon"];

	var Item = function(name, price) {
		this.name = name
		this.price = price

	function addToBasket(items) {
		ShoppingCart.push(name);
	}
	}
}


console.log("Adding " + this.name +  " to the cart at a price of " + this.price);

Cart.prototype.total = function(){

	var total = 0;
	this.items.forEach(function(item) {
		total += item.price;
	}
	var appleDiscount = this.calculateAppleDiscount();

	total -= appleDiscount;

	return total;
}

Cart.prototype.claculateAppleDiscount = function() {

	var discount = 0;

	this.items.forEach(function (item)){
		if (item.name === "apple") {
			if (foundAppleBefore) {
				
			}
		}
	}
}


// ShoppingCart.prototype.*method* = function (){
   
// }

// joshsCart.removeItem(“Apple”, 10)