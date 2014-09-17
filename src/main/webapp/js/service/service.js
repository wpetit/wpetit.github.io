app.service('applicationService', function($http) {
	this.getApplications = function() {
		return $http.get('resources/applications.json');
	};
});