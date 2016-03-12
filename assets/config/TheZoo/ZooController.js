app.controller('ZooController', function($scope, zooService){
    $scope.environments = zooService.getEnvironments();
})

