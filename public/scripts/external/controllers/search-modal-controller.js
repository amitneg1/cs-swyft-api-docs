var app = angular.module('swyftDoc');

app.controller('searchModalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
	
	$scope.queryText = "";

	$scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};
	$scope.clearSearch = function(){
		$scope.queryText = "";
	}
}])