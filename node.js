/*var msg = document.getElementById("message");
//console.log(msg);
/*var wrapper = document.getElementsByClassName("wrapper");
console.log(wrapper);
//console.log(wrapper[0].childNodes);
var eNodes = wrapper[0].childNodes;
console.log(eNodes.length);
function grace(arr) {
	var newArrs = [];
	for (var i = 0; i < arr.length; i++) {
		if ( arr[i].nodeType == 1 )	{
			newArrs.push(arr[i]);
		}
	}
	return newArrs;
}

console.log(grace(eNodes));*/

//---------Class work function----
/*
var wrap = document.getElementsByClassName("wrapper");
var msg = document.getElementById("message");
//console.log({msg});
var prev = msg.previousElementSibling;
prev.contentEditable = true;
//console.log({prev});
function toggler() {
	
	if (prev.contentEditable !== 'true') {
		prev.contentEditable = true;
	} else { 
		prev.contentEditable = false;
	}
}*/

var change = document.getElementsByClassName("change")[0];
var msg = document.getElementsByClassName("contents")[0];
console.log(change.isContentEditable);

function toggler() {
	change.addEventListener("click", function() {
		console.log("Hey");
		//alert("Hi, I am Workin'");
		if (!msg.isContentEditable) {
			msg.contentEditable = true;
			this.textContent = "Save";
		} else {
			msg.contentEditable = false;
			this.textContent = "Change";
		}
	});	
}
toggler();

