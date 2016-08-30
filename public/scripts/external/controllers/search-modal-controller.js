var app = angular.module('swyftDoc');

app.controller('searchModalController', ['$scope', '$uibModalInstance', 'appService', '$location', function($scope, $uibModalInstance, appService, $location){

	$scope.queryText = "";
	$scope.resultsList = [];

	$scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};

	$scope.clearSearch = function(){
		$scope.queryText = "";
	}

	$scope.$watch("queryText", function(newValue, oldValue){
		if(oldValue === newValue || !newValue.length)
			return;
		else{
			$scope.resultsList = appService.searchAPI($scope.queryText);
		}
	})

	$scope.showSearchedAPI = function(key, value){
		$scope.cancel();
		console.log("key : ", key);
		console.log("value : ", value);
		$location.url('/overview');
	}

}])