'use strict'

app.factory('User', ['$http', '$q', function($http, $q){
	var User = {
		_user: null,
		setCurrentUser: function(user){
			if(user && !user.error){
				User._user = user
				return User.currentUser()
			} else {
				var dfd = $q.defer()
				d.reject(user.error)
				return dfd.promise
			}
		},
		currentUser: function(){
			var dfd = $q.defer()
			if (User._user) {
				// current user has been set
				dfd.resolve(User._user)
			} else {
				// fetch user's email address..
				gapi.client.oauth2.userinfo.get()
					.execute(function(e) {
						User._user = e;
					})
			}
			
			return dfd.promise
		}
	}

	return User
}])