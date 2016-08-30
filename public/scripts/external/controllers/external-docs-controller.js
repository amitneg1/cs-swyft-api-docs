var app = angular.module('swyftDoc');

app.controller("externalDocsController", ['$scope', '$uibModal', function($scope, $uibModal){
	console.log("Inside externalDocsController function");
	$scope.openSearchForm = function(event){
		event.preventDefault();
		event.stopPropagation();
		console.log("Inside openSearchForm function");
		var modalInstance = $uibModal.open({
	      animation: false,
	      templateUrl: '../partials/external/search-modal.html',
	      controller: 'searchModalController'
	    });
	}
}])