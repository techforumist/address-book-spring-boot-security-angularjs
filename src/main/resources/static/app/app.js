// Creating angular Application with module name "SecurityTestApp"
angular.module('AddressBook', [ 'ui.router' ])

// If we implement the basic security in spring boot then the response will
// contains the header 'WWW-Authenticate: Basic'. So the browser will popup a
// alert to get the user credentials. To avoid that we have to set a header in
// every request we are making using AngularJs.
.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
} ]).run(function(AuthService, $rootScope, $state) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if (!AuthService.user) {
			if (toState.name != 'login' && toState.name != 'register') {
				AuthService.isInLoginPage = true;
				event.preventDefault();
				$state.go('login');
			}
		} else {
			if (toState.data && toState.data.role) {
				if (toState.data.role != AuthService.user.principal.role) {
					event.preventDefault();
					$state.go('access-denied');
				}
			}
		}
	});
});