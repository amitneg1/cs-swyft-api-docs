var app = angular.module("swyftDoc", ['ui.router', 'ui.bootstrap', 'swyftDoc.external']);

app.config(['$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase : false
	})

	$stateProvider
		.state('login', {
			url : '/',
			templateUrl : 'partials/login.html',
			controller : 'loginController'
		})
}]);