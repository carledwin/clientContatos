var appContato = angular.module("appContato",['ngRoute']);

appContato.config(
		function($routeProvider, $locationProvider){
	$routeProvider
	.when('/contato',{templateUrl:'view/contato.html', controller:'contatoCtrl'})
	.when('/estado',{templateUrl:'view/estado.html', controller:'estadoCtrl'})
	.when('/operadora',{templateUrl:'view/operadora.html', controller:'operadoraCtrl'})
	.otherwise({redirectTo:'/'});
	
	$locationProvider.html5Mode(true);
});
		


