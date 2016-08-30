var app = angular.module('swyftDoc');

app.controller("externalDocsController", ['$scope', '$uibModal', '$state', function($scope, $uibModal, $state){
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

	$scope.logout = function(){
		console.log("Logging you out");
		localStorage.clear();
		$state.go('login');
	}

}])