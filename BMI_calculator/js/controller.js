app.controller("bmicontroller",function($scope,bmiservice){
    
    $scope.calc = function(){
        $scope.bmi = bmiservice.bmicalculator($scope.weight , $scope.height);
        $scope.type = bmiservice.typefinder($scope.bmi);
    }
})