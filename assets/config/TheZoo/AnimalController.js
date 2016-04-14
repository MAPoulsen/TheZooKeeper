app.controller('AnimalController', function($scope, $stateParams, zooService, animalService){
    $scope.animal = animalService.getanimal($stateParams.name);
     $scope.environment = zooService.getEnvironment($stateParams.name);
});