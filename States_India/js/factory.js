app.factory("SOIfactory",function($http,$q){
    var object={};
    object.talkToServer = function(){
        var pr = $q.defer();
        $http.get(config.url).then(function(result){
            pr.resolve(result);
        },function(err){
            pr.reject(err);
        });
        return pr.promise;
    }
    return object;
});