// Create a controller with name wpetitCtrl to bind to the html page.
wpetitAppControllers.controller('wpetitCtrl', function($scope,
		applicationService) {

	$scope.loadApplications = function() {
		applicationService.getApplications().success(function(data) {
			$scope.applications = data.applications;
		});
	};

	$scope.loadApplications();

	$scope.$watch('applications', function(newVal) {
		$scope.currentApp = null;
		for (app in $scope.applications) {
			if (app.active) {
				$scope.currentApp = app;
				break;
			}
		}
	});
});

//Create a controller with name wpetitCtrl to bind to the html page.
wpetitAppControllers.controller('navController', function($scope, $location) {

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

