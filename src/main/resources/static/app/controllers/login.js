angular.module('AddressBook')
// Creating the Angular Controller
.controller('LoginController', function($http, $scope, $state, AuthService, $rootScope) {

	// method for login
	$scope.login = function() {
		// creating base64 encoded String from user name and password
		var base64Credential = btoa($scope.username + ':' + $scope.password);

		// calling GET request for getting the user details
		$http.get('user', {
			headers : {
				// setting the Authorization Header
				'Authorization' : 'Basic ' + base64Credential
			}
		}).success(function(res) {
			$scope.password = null;
			if (res.authenticated) {
				$scope.message = '';
				// setting the same header value for all request calling from
				// this application
				$http.defaults.headers.common['Authorization'] = 'Basic ' + base64Credential;
				AuthService.user = res;
				$rootScope.$broadcast('LoginSuccessful');
				$state.go('address');
			} else {
				$scope.message = 'Authetication Failed !';
			}
		}).error(function(error) {
			$scope.message = 'Authetication Failed !';
		});
	};
});
