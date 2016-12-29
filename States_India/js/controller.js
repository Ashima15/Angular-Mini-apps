app.controller("SOIcontroller",function($scope,SOIfactory){
    $scope.loadData = function(){
    var promise = SOIfactory.talkToServer();
    for(var i=0;i<=10;i++){
        console.log("I am doing some work");
    }
    promise.then(function(data){
        $scope.result=data;
    }, function(err){
        $scope.result = err;
    })
    }
});