$(document).ready(function() {
	$("h1").addClass("heading");
	$("p").css({"font-size": "16px"});
	$("#minutes").html("<span>This is my time</span>");
	//console.log($("h1").html());
	$("select").change(function() {
		console.log($(this));
	})
});