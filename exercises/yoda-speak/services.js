angular.module("yodaApp")

.service("httpService", ["$http", function ($http){
    
    //get all the data from scope, send it to http service for processing. return the results
    
    
  this.getRequest = function (phrase){
       var config = {
            headers: {
                'X-Mashape-Key': "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            }
        };

      return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config).then(
            function(response){
                return response.data;
        }, function(response){
            return ("There was an error: " + response.status + " " + response.statusText);
        }
            
        );
  }
  
  this.whileLoading = "Loading...";
  
}]);