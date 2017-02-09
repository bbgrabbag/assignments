angular.module("myApp", [])
    
    .controller ("mainCtrl", ["$scope", "redService", "blueService", function($scope, redService, blueService){
        $scope.blueNumber = 100;
        $scope.redNumber = 100;
        
        //blue button:
        $scope.bluePushButton = function (){
            $scope.blueNumber = blueService.increment($scope.blueNumber);
            
            $scope.redNumber = blueService.decrement($scope.redNumber);
            
            if ($scope.redNumber === 0){
                $scope.redNumber = blueService.reset($scope.redNumber);
            }
            
        };
        
        //red button:
        
        $scope.redPushButton = function (){
            $scope.blueNumber = redService.decrement($scope.blueNumber);
            
            $scope.redNumber = redService.increment($scope.redNumber);
            
            if ($scope.blueNumber === 0){
                $scope.blueNumber= redService.reset($scope.blueNumber);
            } 
            
        }
          
    }]);
