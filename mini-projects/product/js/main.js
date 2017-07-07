$(document).ready(function(){
	$(".display").click(function() {
		$(".sub-card").fadeToggle();
	});
	$("input[type='checkbox']").change(function() {
		var list = '';
		var total = 0;
		$("[type='checkbox']:checked").each(function(e) {
			list += "<li>" + $(this).parent().text() + "</li>";
			total += Number($(this).val());
		});
		//$("#list").html("<li>" + $(this).parent().text() + "</li>");

		console.log(total);
		$("#list").html(list);
		$("#price").html(total);
	});

})
