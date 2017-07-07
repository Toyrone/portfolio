var obj = {};
var endpoint = 'https://www.reddit.com/r/funny/.json';
//fetch(endpoint).then(blob => blob.json()).then(data => console.log(data));
fetch(endpoint).then(blob => blob.json()).then(data => console.log(data));


for (var i = 0; i < endpoint.length; i++) {
	console.log(endpoint[i].object);
}