angular.module('AddressBook')
// Creating the Angular Controller
.controller('AddressController', function($http, $scope, AuthService) {
	var edit = false;
	$scope.buttonText = 'Create';
	var init = function() {
		$http.get('api/address').success(function(res) {
			$scope.addressList = res;
			
			$scope.addressForm.$setPristine();
			$scope.address = null;
			$scope.buttonText = 'Create';
			
		}).error(function(error) {
			$scope.message = error.message;
		});
	};
	$scope.edit = function(address) {
		edit = true;
		$scope.address = address;
		$scope.message='';
		$scope.deleteMessage='';
		$scope.buttonText = 'Update';
	};
	$scope.addAddress = function() {
		edit = false;
		$scope.address = null;
		$scope.addressForm.$setPristine();
		$scope.message='';
		$scope.deleteMessage='';
		$scope.buttonText = 'Create';
	};
	$scope.deleteAddress = function(address) {
		$http.delete('api/address/'+address.id).success(function(res) {
			$scope.deleteMessage ="Success!";
			init();
		}).error(function(error) {
			$scope.deleteMessage = error.message;
		});
	};
	var editAddress = function(){
		$http.put('api/address', $scope.address).success(function(res) {
			$scope.address = null;
			$scope.confirmPassword = null;
			$scope.addressForm.$setPristine();
			$scope.message = "Editting Success";
			init();
		}).error(function(error) {
			$scope.message =error.message;
		});
	};
	var addAddress = function(){
		$http.post('api/address', $scope.address).success(function(res) {
			$scope.address = null;
			$scope.confirmPassword = null;
			$scope.addressForm.$setPristine();
			$scope.message = "Address Created";
			init();
		}).error(function(error) {
			$scope.message = error.message;
		});
	};
	$scope.submit = function() {
		if(edit){
			editAddress();
		}else{
			addAddress();	
		}
	};

	init();

});
