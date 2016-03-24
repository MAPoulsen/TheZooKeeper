app.controller('ZooController', function($scope, zooService, animalService) {
    
     window.formatImage = function() {
        var ratio = window.innerWidth / 2693;
        var div = document.getElementById("board");
        if(div){
         div.style.height = 1974 * ratio;
        }
    }
    window.onresize = window.formatImage;
    window.formatImage();
    
    $scope.environments = zooService.getEnvironments();
    console.log($scope.environments);
    
  
   /* $scope.showModal = function() {
        $scope.myModal = true;
    }

    $scope.hideModal = function() {
        $scope.myModal = false;
    }*/

   

    $scope.selectCurrentAnimal = function(){
        $scope.animals = shuffleArray(animalService.getAnimals());
        $scope.currentAnimal = $scope.animals[0];
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
})










