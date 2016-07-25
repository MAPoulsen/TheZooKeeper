app.controller('ZooController', function($scope, zooService, animalService) {
<<<<<<< HEAD
    // window.formatImage();
=======


    window.formatImage = function() {
        var ratio = window.innerWidth / 2693;
        var div = document.getElementById("board");
        if (div) {
            div.style.height = 1974 * ratio;
        }
    }
    window.onresize = window.formatImage;
    window.formatImage();

>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
    $scope.environments = zooService.getEnvironments();
    console.log($scope.environment);


    /* $scope.showModal = function() {
         $scope.myModal = true;
     }
 
     $scope.hideModal = function() {
         $scope.myModal = false;
     }*/

    // shuffle and call new animal
    $scope.selectCurrentAnimal = function(x) {
        if (x) {
            $scope.currentAnimal = ''
            return
        }
        window.formatImage();
        $scope.environments = zooService.getEnvironments();
        $scope.showImage = false;
        $scope.showModal = function() {
            $scope.myModal = true;
        }

        $scope.hideModal = function() {
            $scope.myModal = false;
        }

        $scope.show = function(name) {
            alert(name);
            $scope.showImage = !$scope.showImage;
        }

        $scope.selectCurrentAnimal = function() {
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

        $scope.startDragging = function(event, ui, animal) {
            console.log("You've just started dragging " + animal.animal);
            $scope.draggedAnimal = animal.animal;
        }


        $scope.dropComplete = function(animal, index) {
            var environment = $scope.environments[index];
            environment.animals = environment.animals || [];
            for (var i = 0; i < environment.animals.length; i++) {
                if (environment.animals[i].name === animal.name) {
                    //dont push if already in environment
                    console.log("You already left this animal here once!");
                    return
                }
            }
            environment.animals.push(animal);
            console.log($scope.environments[index])
            $scope.selectCurrentAnimal(true);
        }
    }
});



















