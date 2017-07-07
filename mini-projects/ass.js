var par = document.getElementById("parent");
var select = document.getElementById("child");


var obj = {
	football: ['Jerseys', 'Boots', 'Football'],
	tennis: ['Rackets', 'Singlets', 'Tennis Balls'],
	swimming: ['Swim wear', 'Goggles', 'Go pro']
}
//console.log(obj);

par.addEventListener('change', function(e) {
	//console.log(e.target.value);
	for ( var object in obj) {
		if (e.target.value == object) {
			//console.log(object[]);
			for ( var i = 0; i < obj[object].length; i++ ) { 
				//console.log(obj[object])
				selChild = document.createElement('option');
				selChild.innerHTML = obj[object][i];
				//console.log(selChild);
				select.appendChild(selChild);
			}
		}
	}
	else {
		
	}
});
