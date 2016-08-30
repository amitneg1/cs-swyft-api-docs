var app = angular.module('swyftDoc');

app.controller("loginController", ['$scope', '$uibModal', '$state', function($scope, $uibModal, $state){
	$scope.openLoginForm = function(){
		$state.go('external-docs.apiDocs');
		return;
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: '../partials/login-modal.html',
	      controller: 'loginModalController'
	    });
	}
}])