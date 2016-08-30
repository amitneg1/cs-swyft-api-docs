var app = angular.module('swyftDoc');

app.controller("apiDocsController", ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.apis = $rootScope.swaggerData["paths"];
	$scope.pathParams = true;
	$scope.bodyParams = true;
	$scope.queryParameters = true;
	console.log("APIs : ", $scope.apis);
	var method = "";
	for(key in $scope.apis){
		method = Object.keys($scope.apis[key])[0];
		$scope.apis[key] = $scope.apis[key][method];
		$scope.apis[key]["http_method"] = method;
		$scope.apis[key]["api_endpoint"] = "https://api.swyftmedia.com" + key;
		if(key.indexOf('oauth') !== -1){
			$scope.apis[key]["requires_authentication"] = false;
		}
		else{
			$scope.apis[key]["requires_authentication"] = true;
		}
	}

}])