angular.module('AddressBook')
// Creating the Angular Controller
.controller('AddressController', function($http, $scope, AuthService) {
	if (AuthService.user) {
		$scope.message = 'Address Welcome ' + AuthService.user.principal.name;
		console.log(AuthService.user);
	}

});
