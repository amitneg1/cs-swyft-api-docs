var app = angular.module('swyftDoc');

app.service("appService", ['$http', '$rootScope', function($http, $rootScope){
	this.searchAPI = function(queryText){
		queryText = queryText.toLowerCase();
		var searchResults = {};
		var apis = $rootScope.swaggerData["paths"];
		for(key in apis){
			if(apis[key]["summary"].toLowerCase().indexOf(queryText) !== -1){
				searchResults[key] = apis[key];
			}
		}
		return searchResults;
	}
}]);