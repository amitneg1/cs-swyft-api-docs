var app = angular.module('swyftDoc');

app.service("appService", ['$http', '$rootScope', function($http, $rootScope){
	console.log("appService");
}])