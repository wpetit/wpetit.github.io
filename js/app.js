// FIX for carousel see : https://github.com/angular-ui/bootstrap/issues/1350
angular.module('ui.bootstrap.setNgAnimate', [ 'ngAnimate' ]).directive(
		'setNgAnimate', [ '$animate', function($animate) {
			return {
				link : function($scope, $element, $attrs) {

					$scope.$watch(function() {
						return $scope.$eval($attrs.setNgAnimate, $scope);
					}, function(valnew, valold) {
						$animate.enabled(!!valnew, $element);
					});

				}
			};
		} ]);

var app = angular.module('wpetitApp', [ 'ngRoute','ui.bootstrap', 'ngAnimate', 'ngTouch',
		'ui.bootstrap.setNgAnimate', 'wpetitAppControllers' ]);

var wpetitAppControllers = angular.module('wpetitAppControllers', []);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/android/list', {
		templateUrl : 'partials/android-list.html',
		controller : 'wpetitCtrl'
	}).when('/maven/list', {
		templateUrl : 'partials/maven-list.html',
		controller : 'wpetitCtrl'
	}).otherwise({
		redirectTo : '/android/list'
	});
} ]);