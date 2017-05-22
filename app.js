var app=angular.module("myApp" , []);

app.controller("myController" ,["$scope",
                                 "custFactory" ,
                                  function($scope ,custFactory){
$scope.message="hiii"
$scope.result=custFactory
}])