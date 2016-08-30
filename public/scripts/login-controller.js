var app = angular.module('swyftDoc');

app.controller("loginController", ['$scope', '$uibModal', '$state', function($scope, $uibModal, $state){
	console.log("Inside loginController function");
	$scope.user = {};

	$scope.items = ["item1", "item2"];

	$scope.openLoginForm = function(){
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: '../partials/login-modal.html',
	      controller: 'loginController'
	    });

	    modalInstance.result.then(function (selectedItem) {
	      console.log("selectedItem : ", selectedItem);
	    }, function () {
	      console.log('Modal dismissed at: ' + new Date());
	    });
	}

	$scope.cancel = function () {
	    // $uibModalInstance.dismiss('cancel');
	};

	function validateCredentials(){
		if(!$scope.user.username || !$scope.user.password)
			return false;
		else if($scope.user.username && $scope.user.username !== 'test')	
			return false;
		else if($scope.user.password && $scope.user.password !== 'test')
			return false;
		else return true;
	}

	function storeUserCredentials(){
		localStorage.setItem('userName', 'admin');
		localStorage.setItem('authToken', 'Monotype123#');
	}

	$scope.login = function(){
		console.log("Inside login function");
		if(validateCredentials())
		{
			storeUserCredentials();
			$state.go('external-docs.guide');
		}
		else{
			console.log("Invalid login credentials");
		}
	}
}])