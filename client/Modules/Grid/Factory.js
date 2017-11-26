configApp.factory('CallRestAPI', function($http){
	var CallRestAPI = {};
	CallRestAPI.callRest = function (httpMethodType){ 
		if(httpMethodType == "GET"){//Call rest method using GET 
			var path = "http://localhost:2900/alltransaction";
			return $http.get(path);
		}
		else if(httpMethodType == "POST"){//Call post method using POST. I am not using it for Athena Demo
			//return $http.post(url, data, config); 
		}
	};
	return CallRestAPI;
});