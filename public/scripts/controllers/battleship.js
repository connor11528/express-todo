'use strict';

app.controller('BattleshipCtrl', ["$scope", "Battleship", '$http', function ($scope, Battleship, $http) {
  	$scope.game = {}
  	$scope.msg = ''
  	$scope.newGame = function(name, email){
  		// console.log(
  		// 	Battleship.register($scope.game.name, $scope.game.email)
  		// 	)

  		$http.post("/battleship/register", {
  					'name': name,
  					'email': email
  	  				}).success(function(data){
  						console.log('Success')
  					})


  	}

  }]);
