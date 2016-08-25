var express = require("express");

var app = express();

app.use(express.static('public'));

app.listen(5678, function(){
	console.log("Browse API docs at port 5678");
})