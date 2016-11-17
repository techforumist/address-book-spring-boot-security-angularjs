angular.module('AddressBook')
// Creating the Angular Controller
.controller('HomeController', function($http, $scope, AuthService) {
	if (AuthService.user) {
		$scope.message = 'Welcome ' + AuthService.user.principal.name;
		console.log(AuthService.user);
	}

});
