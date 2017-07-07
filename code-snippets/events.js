var btn = document.getElementById("btn");
//console.log(btn);
btn.addEventListener("click", function(e) {
	//alert("Hooray");
	console.log(e.target);
});

var input = document.getElementsByName("inp")[0];
//console.log(input); 
/*input.addEventListener("mouseout", function(e){
	//console.log(e);
});*/
//input.addEventListener("focus", focusHandler);
function focusHandler(e) {
	//console.log(e);
}
var option = document.getElementsByTagName("select")[0];
/*function changeHandler(e) {
	console.log(e.target.value);
}*/

//console.log(option);
//option.addEventListener('change', changeHandler);
/*function colorHandler(e) {
	//console.log(e);
	body.style.backgroundColor = e.target.value;
}
var body = document.getElementsByTagName("body")[0];
//console.log({body});
var color = document.getElementsByClassName("color")[0];
//console.log(color);
color.addEventListener("change", colorHandler);*/

var table = document.getElementById("multiplication");
var tcols = document.getElementsByTagName("col");
//console.log(tcols);
//var tcols = 
function tableHandler(e) {
	//console.log(e);
	var t = e.target;
	//console.log(t.nodeName);
	if (t.nodeName != 'TD') {
		return;
	}
	var cName = [e.type == 'mouseover'? "active": ""]
	t.parentNode.className = cName;
	console.log(t.cellIndex);
	//console.log(cName);
	tcols[t.cellIndex].className = cName;
}
table.addEventListener('mouseover', tableHandler);
table.addEventListener('mouseout', tableHandler);