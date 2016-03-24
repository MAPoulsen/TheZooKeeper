app.controller('AnimalController', function($scope, $stateParams, zooService, animalService){
    //console.log('AnimalController here with arg ' + $stateParams.animalName);
   
    $scope.animal = animalService.getAnimal($stateParams.animalName);
     $scope.environment = zooService.getEnvironment($stateParams.animalName);
   
});