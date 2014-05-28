'use strict'

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.signedIn = function(oauth) {

		// "Remember, services are singleton objects that 
		// live for the duration of the application lifecycle."
    	
    	User.setCurrentUser(oauth)
    		.then(function(user){
    			$scope.user = user
    		})
    }

    
}])