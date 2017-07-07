$(document).ready(function(){

	$('.head').click(function(){

		$(this).next('.body').slideToggle();
		
	});

	$(':button').click(function(){
		
		var name = $('.form-group').children('#name').val();
		var gender  = $('.form-group').children('#gender').val();
		var football = $('.form-group').children('#football').val();
		var chess  = $('.form-group').children('#chess').val();
		var rice = $('.form-group').children('#rice').val();
		var meat  = $('.form-group').children('#meat').val();
		var baseball = $('.form-group').children('#baseball').val();
		var rugby  = $('.form-group').children('#rugby').val();
		validateForm(name, gender);

	});

function validateForm(name, gender, football, chess, rice, meat, baseball, rugby) {
	
	if(name== '' || gender== ''){
			alert('Fill in field');
		}else {

			$('.body').slideUp();

			$('.body2').slideDown();
		}
		
}

//var x = document.getElementsByName('text');
	//console.log(x);

$(':text').focusin(function(){
	$(this).css('background-color', 'pink');
});
$(':text').blur(function(){
	$(this).css('background-color', 'white');
})

});

