
app.controller("RegionController", function($scope, $state, zooService){
    $scope.region = zooService.getEnvironment($state.params.regionName);
});