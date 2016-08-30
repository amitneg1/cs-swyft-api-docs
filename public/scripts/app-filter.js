var app = angular.module('swyftDoc');

app.filter("filterByQueryParams", function(){
	return function(paramsList){
		var filteredList = [];
		for(var i = 0; i < paramsList.length; i++){
			if(paramsList[i]["in"] === "query")
				filteredList.push(paramsList[i]);
		}
		return filteredList;
	}
})

app.filter("filterByPathParams", function(){
	return function(paramsList){
		var filteredList = [];
		for(var i = 0; i < paramsList.length; i++){
			if(paramsList[i]["in"] === "path")
				filteredList.push(paramsList[i]);
		}
		return filteredList;
	}
})

app.filter("filterByBodyParams", function(){
	return function(paramsList){
		var filteredList = [];
		for(var i = 0; i < paramsList.length; i++){
			if(paramsList[i]["in"] === "formData")
				filteredList.push(paramsList[i]);
		}
		return filteredList;
	}
})