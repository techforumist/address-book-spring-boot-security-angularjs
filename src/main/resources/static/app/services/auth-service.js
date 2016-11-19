angular.module('AddressBook')
// Creating the Angular Controller
.service('AuthService', function() {
	return {
		user : null,
		isInLoginPage : false
	}
});
