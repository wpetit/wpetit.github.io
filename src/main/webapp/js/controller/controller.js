// Create a controller with name wpetitCtrl to bind to the html page.
wpetitAppControllers.controller('wpetitCtrl', function($scope, $location,
		$routeParams, $modal, toaster, applicationService) {
	
	$scope.loadApplications = function() {
		applicationService.getApplications().success(function(data) {
			$scope.applications = data.applications;
		});
	}
	
	$scope.loadApplications();
});
