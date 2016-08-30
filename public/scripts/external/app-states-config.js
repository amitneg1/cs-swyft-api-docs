var app = angular.module('swyftDoc.external', ['ui.router']);

app.config(['$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('external-docs', {
			url : '',
			templateUrl : 'partials/external/sidebar.html',
			controller : 'externalDocsController',
			abstract : true
		})
		.state('external-docs.overview', {
			url : '/overview',
			templateUrl : 'partials/external/overview.html',
			controller : "overviewController"
		})
		// .state('external-docs.guide', {
		// 	url : '/guide',
		// 	templateUrl : 'partials/external/guide.html',
		// 	controller : "guideController"
		// })
		.state('external-docs.apiDocs', {
			url : '/docs',
			templateUrl : 'partials/external/apiDocs.html',
			controller : "apiDocsController",
			resolve : {
				swaggerData : function($rootScope, $http){
					return $http.get('http://ec2-52-71-111-120.compute-1.amazonaws.com/explorer/swagger.json').then(function(response){
						$rootScope.swaggerData = response.data;
						return true;
					})
				}
			}
		})
}]);