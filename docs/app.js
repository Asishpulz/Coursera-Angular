
(function(){
'use strict';

angular.module("LunchBoxApp",[])
.controller("LunchBoxController",LunchBoxController);
LunchBoxController.$inject=['$scope'];
function LunchBoxController($scope){
    $scope.displayValue = function(){
      $scope.Value="Please enter Valid data"
      var totalItems=0;
      totalItems= calculateItems($scope.Check);
      if(totalItems>3)
        $scope.Value="Too much!";
      else if(totalItems==0)
        $scope.Value="Please enter Valid data";    
      else 
        $scope.Value="Enjoy!";       
    };

    function calculateItems(string){ 
      if(string.length!=0)
       {const words = string.split(',');
        return words.length;
       }
       else 
        return 0; 
    }

}

})();