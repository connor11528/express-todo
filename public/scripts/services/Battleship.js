'use strict';

app.service('Battleship', ['$http', function Battleship($http) {
	var Battleship = {
		register: function(name, email){
			// return plain object instead of making HTTP request
			return {"id":"3119","x":7,"y":5};
		},

		nuke: function(id, x, y){

		}

	};

	return Battleship;
}]);



  		// $http.post("http://battle.platform45.com/register", {
  		// 			'name': name,
  		// 			'email': email
  	 //  				}).success(function(){
  		// 			console.log('Success')
  		// 		})

  		// $http({
  		// 	url: "http://battle.platform45.com/register",
  		// 	method: 'POST',
  		// 	data: JSON.stringify({ name: 'name', email: 'email'}),
  		// 	headers: {'Content-Type': 'application/json'}
   	// 	}).success(function(data, status, headers, config){
  		// 	console.log('Success')
  		// 	$scope.msg = "Success!"
  		// }).error(function(data, status, headers, config){
  		// 	$scope.msg = 'error: ' + headers
  		// })
  	// }