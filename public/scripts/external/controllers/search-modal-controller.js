var app = angular.module('swyftDoc');

app.controller('searchModalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
	$scope.msg = "Hello World";
}])