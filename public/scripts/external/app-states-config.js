var app = angular.module('swyftDoc.external', ['ui.router']);

app.config(['$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('external-docs', {
			url : '',
			templateUrl : 'partials/external/sidebar.html',
			abstract : true
		})
		.state('external-docs.guide', {
			url : '/guide',
			templateUrl : 'partials/external/guide.html',
			controller : "guideController"
		})
		.state('external-docs.overview', {
			url : '/overview',
			templateUrl : 'partials/external/overview.html',
			controller : "overviewController"
		})
		.state('external-docs.apiDocs', {
			url : '/docs',
			templateUrl : 'partials/external/apiDocs.html',
			controller : "apiDocsController"
		})
}]);