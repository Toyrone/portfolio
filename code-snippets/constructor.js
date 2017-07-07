var msg = document.getElementById("message");

function Car(make, model, color) {
	this.make = make || "Unknown";
	this.model = model || "Unknown";
	this.color = color || "Unknown";
	this.display = function() {
		msg.innerHTML += "<p>Your car is a " + this.color + " " + this.make + " " + this.model + "</p>";
	}
}

var car1 = new Car("Ford", "Mustang", "Blue");
var car2 = new Car("Dodge", "Challenger", "Yellow");
car1.display();
car2.display();
var car3 = new Car();
car3.display();
car3.color = "White";
car3.display();