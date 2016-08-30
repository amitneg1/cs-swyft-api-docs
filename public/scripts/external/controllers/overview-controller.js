var app = angular.module('swyftDoc');

app.controller("overviewController", ['$scope', '$rootScope', function($scope, $rootScope){
	console.log("Inside overviewController function");
	$rootScope.pageInfo = 'overview';
}])