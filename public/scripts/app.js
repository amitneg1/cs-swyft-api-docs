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
			controller : 'loginController',
			data : {
				"requireLogin" : false
			}
		})
}]);

app.run(['$rootScope', '$state', function($rootScope, $state){

	function isAuthenticated(){
		if(localStorage.getItem('authToken') !== 'Monotype123#')
			return false;
		else return true;
	}

	$rootScope.$on('$stateChangeStart',	function(event, toState, toParams, fromState, fromParams, options){
		console.log("toState : ", toState);
		console.log("fromState : ", fromState);
		console.log("isAuthenticated : ", isAuthenticated());
		if(toState.data.requireLogin && !isAuthenticated()){
			$state.go('login');
		}
		if(toState.name === 'login' && isAuthenticated()){
			event.preventDefault();
		}
	})
}])