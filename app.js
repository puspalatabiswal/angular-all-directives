var app=angular.module("myApp" , []);

app.controller("myController" ,["$scope",
                                 "custFactory" , 
                                  function($scope ,custFactory){
$scope.message="hiii"
$scope.result=custFactory
        $scope.custom = true;
        $scope.toggleCustom =
        function() {
            $scope.custom = $scope.custom === false ? true: false;
        };

}])