var msg = document.getElementById("message");
/*var dateNow = new Date();
var date2020 = new Date(2020, 0, 1);
var days = Math.ceil((date2020 - dateNow)/(1000*60*60*24));
msg.innerHTML = "<p>" + "Days to 2020: " + days + " days</p>"; */

//name = prompt("Enter Your name");


function greetMe() {
	//var greeting = "";
	if (dateNow.getHours() < 12) {
		var greeting = "Good Morning " + name;
	}else if ( dateNow.getHours() <=16) {
		var greeting = "Good Afternoon " + name;
	}
	else  {
		var greeting = "Good Evening " + name;
	}
	alert(greeting + "," + " Have a Good Day!");
};

	
	//dateSec.SetTimeOut;

function digiTime() {
	dateNow = new Date();
	var dateHr = dateNow.getHours();
	var dateMin = dateNow.getMinutes();
	var dateSec = dateNow.getSeconds();
	//msg.innerHTML = "<p>" + dateHr + ":" + dateMin + ":" + dateSec + " </p>";
	var hr = document.getElementById("hour");
	hr.textContent = dateHr;
	var min = document.getElementById("min");
	min.textContent = dateMin;
	var sec = document.getElementById("sec");
	sec.textContent = dateSec;

};
//setInterval( digiTime, 1000);
function cubeRoot() {
	root = prompt("Enter any number");
	alert(Math.pow(root, 1/3));
	/*for (i = 0; i<=root; i++ ){
		if ((i * i * i) == root) {
			alert(i);
		}
	}*/
}
	//alert(Math.cbrt(root));
//cubeRoot();

 console.log({msg});
 //msg.style.backgroundColor = "#f3f3f3";
 function color() {
 	col = Math.ceil(Math.random() * 1000000);
 	msg.style.backgroundColor = "#" + col;
 }
 //color();
 setInterval('color()', 500);