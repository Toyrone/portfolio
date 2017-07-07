/*var msg = document.getElementById("change")[0];
//console.log(contents.isContentEditable);

function toggler() {
	msg.addEventListener("click", function() {
		alert("Hi, I am Workin");
		if (!contents.isContentEditable) {
			contents.contentEditable = true;
			this.textContent = "Save";
		} else {
			contents.contentEditable = false;
			this.contentEditable = "Change";
		}
	});	
}
toggler();*/
//---ClassWork--
var edits = document.getElementsByClassName('change');
   //console.log({edits});
   function toggler2() {
       for (var i = 0; i < edits.length; i++) {
           //console.log(edits.item(i));
           edits.item(i).addEventListener('click', function() {
               //console.log(this.parentElement.previousElementSibling);
               var msg = this.parentElement.previousElementSibling;

               if (!msg.isContentEditable) {
                    msg.contentEditable = true;
                    this.textContent = "Save";
                }
                else{
                    msg.contentEditable = false;
                    this.textContent = "Edit"
                }
           });
       }
   }

   toggler2();

   /*var msg = document.getElementById('wrapper');
   var obj = new Date();
   msg.innerHTML = obj;
   console.log({obj})
   console.log(obj.getMinutes());
   var d = new Date();
   console.log(d.setDate(0));*/