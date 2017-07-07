var form = {
	register: document.getElementById("register"),
	email: document.getElementById("email"),
	pass1: document.getElementById("pass1"),
	pass2: document.getElementById("pass2")
};

//-To Handler Submission
form.register.addEventListener('submit', submitHandler);

form.email.addEventListener('change', emailHandler);

form.pass1.addEventListener('keypress', spaceHandler);

form.pass2.ddEventListener('keypress', spaceHandler);

var confirmEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


function submitHandler(e) {
	var msg = "";
	if (!confirmEmail.test(form.email.value)) {
		msg += "/nYour Email address ";
	}
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value) {
		msg += "/nYour password";
	}
	if (msg != "") {
		msg = "Please check " + msg;
	} else {
		msg = "Form is valid...";
	}
	alert(msg);
	e.preventDefault();
}
 
function emailHandler(e) {
	if (e.target.value) {
		alert("You forgot your Email");
	}

}
function spaceHandler(e) {
	if (e.charCode == 32) {
		e.preventDefault();
	}
}

