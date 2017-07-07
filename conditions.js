/*var msg = document.getElementById("message");

var name = prompt("What is your name?");

var output = "";
if (name == "") {
	output="Please enter your name";
} else{
	output = "Welcome " + name;

}
msg.textContent = output;*/


/*

-------class 2-------
var msg = document.getElementById("message");
var num = prompt("Give me a number", 10);


	
	if ( typeof num != 'number' ) {
		output = "Please enter a number";
	} else {
		for (var i = 2, output = 1; i <= num; i++) {
		output *= i;

	}

}
msg.textContent = num + "! = " + output;*/


/*msg = document.getElementById("message");
var num = prompt("Bank Details");
while (num.length < 8) {
	num = 0 + num;
}
msg.textContent = num;

/*var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var items = nums.length;

var total = 0;
for (var i = 0; i < items; i++) {
	total = total + nums[i];
}
//console.log(total);

var mean = total / items;
alert(mean);*/

// 3-----SWITCH Statements--------

/*var msg = document.getElementById("message");
var name = prompt("What is your name");
var output = "";

switch(name) {
	case "jane":
		output = "Hello jane ";
		break;
	case "toyosi":
		output = "Hello toyosi ";
		break;
	case "akin":
		output = "Hello akin ";
		break
	default:
		output = "Hi, Stranger ";
		break;
}
output += name + "!";
msg.textContent = output;

//4--------Functions-------
/*function factorial(num) {
	var output = 1;
	for (var i = 2; i <= num; i++) {
		output *= i;
	}
	return output;

}

//console.log(factorial(5));

function product(a, b) {
	var result = a * b;
	return result;
}

//console.log(product(4, 5));
//msg = document.getElementById("message");

/*var arr = [];
arr.push(10);
arr.push(20);
arr.unshift(5);
arr.push(30);
arr.unshift(40)

arr.sort( 
	function(a, b) {
		return a - b;
});
msg.innerHTML += "<p> new array </p>" + arr + " ";
*/

/*var arrs = ["Bisi", "Joe", "Doro", "Vic", "Wiz", "Toy", "Grace"];
console.log(arrs);
arrs.sort();
msg.innerHTML += "<p> Sorted Class list </p>" + arrs + " ";

*/

/*var msg = document.getElementById("message");

function showMessage(a, b, c) {
	var output = "";
	for (var i = 0; 1 < arguments.length; i++ ) {
		output += arguments[i] + "";
	}

console.log(output);

showMessage("hello");
showMessage("hello ", "from");
showMessage("hello ", "from ", "the other side");*/

var msg = document.getElementById("message");

var myCar = {};
myCar.make = "ford";
myCar.model = "mustang";
myCar.color = "blue";
myCar.display = function() {
	msg.innerHTML += "<p>Your car is a " + this.color + " " + this.make + " " + this.model + "</p>";

}
myCar2 = {
	make: "dodge",
	model: "challenger",
	color: "red",
	display: function() {
		msg.innerHTML += "<p>Your car is a " + this.color + " " + this.make + " " + this.model + "</p>";
	}
};

console.log(myCar);
console.log(myCar2);

var myCar3 = {};
for ( var prop in myCar) {
	if ( myCar.hasOwnProperty(prop) ) {
		myCar3[prop] = myCar[prop];
	}
}
console.log(myCar3);

myCar.display();
