

app.controller("RegionController", function($scope, $state, zooService, animalService){
    $scope.region = zooService.getEnvironment($state.params.regionName);
});