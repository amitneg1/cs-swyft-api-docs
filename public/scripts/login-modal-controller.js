var app = angular.module('swyftDoc');

app.controller("loginModalController", ['$scope', '$uibModalInstance', '$state', function($scope, $uibModalInstance, $state){
	console.log("Inside loginModalController function");
	$scope.user = {};
	$scope.cancel = function () {
	    $uibModalInstance.close('close');
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
		if(validateCredentials())
		{
			storeUserCredentials();
			$scope.cancel();
			console.log("Login successful");
			$state.go('external-docs.apiDocs');
		}
		else{
			console.log("Invalid login credentials");
		}
	}
}])