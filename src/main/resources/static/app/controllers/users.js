angular.module('AddressBook')
// Creating the Angular Controller
.controller('UsersController', function($http, $scope, AuthService) {
	if (AuthService.user) {
		$scope.message = 'Users Welcome ' + AuthService.user.principal.name;
		console.log(AuthService.user);
	}

});
