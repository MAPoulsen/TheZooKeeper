app.controller('ZooController', function($scope, zooService, animalService) {


    window.formatImage = function() {
        var ratio = window.innerWidth / 2693;
        var div = document.getElementById("board");
        if (div) {
            div.style.height = 1974 * ratio;
        }
    }
    window.onresize = window.formatImage;
    window.formatImage();

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







// var playerScore= 10;

// if(playerScore => 100){
//     thriving= true;
//     console.log("Your zoo is thriving!")
// }

// var thriving = function(){
//     if(playerScore > 0){
//         return true;
//     }

// var placeCurrentAnimal = function (){
//     playerScore = playerScore + 10;
// }

// var randomDamageThisRound = Math.floor(Math.random() * 5 + 1);
// var totalDamage = 0;

// while (thriving) {
//   if (placeCurrentAnimal) {
//     console.log("You hit the dragon and did " + damageThisRound + " damage!");
//     totalDamage += damageThisRound;

//     if (totalDamage >= 4) {
//       console.log("You did it! You slew the dragon!");
//       thriving = false;
//     } else {
//       placeCurrentAnimal = Math.floor(Math.random() * 2);
//     }
//   } else {
//     console.log("The dragon burninates you! You're toast.");
//     slaying = false;
//   }
// }






// app.controller('GameController', function ($scope, $timeout) {
//     $scope.points = 0;

//     $scope.burrows = [{ id: 1, occupied: false }, { id: 2, occupied: false }, { id: 3, occupied: true, occupant: "Mole", source: '/assets/img/Monty_Mole.png' }, { id: 4, occupied: true, occupant: "Mole", source: '/assets/img/Monty_Mole.png' }, { id: 5, occupied: true, occupant: "Charlie Sheen", source: '/assets/img/charlie.png' }, { id: 6, occupied: true, occupant: "Badger", source: '/assets/img/HONEY_BADGER.png' }];

//     $scope.peekaboo = function (burrow) {
//         if (!burrow.occupied) {
//             return
//         }
//         burrow.show = true;
//         if (burrow.occupant === "Mole") {
//             $scope.points += 5;
//         } else if (burrow.occupant === "Badger") {
//             $scope.points--;
//         } else {
//             $scope.points -= 5;
//         }

//         victory();

//         $timeout(function () {
//             burrow.show = false;
//             shuffle();
//         }, 1000);



//     }

//     function shuffle() {

//         var m = $scope.burrows.length
//         var t;
//         var i;

//         // While there remain elements to shuffle…
//         while (m) {

//             // Pick a remaining element…
//             i = Math.floor(Math.random() * m--);

//             // And swap it with the current element.
//             t = $scope.burrows[m];
//             $scope.burrows[m] = $scope.burrows[i];
//             $scope.burrows[i] = t;
//         }

//     };

//     function victory() {
//         if ($scope.points >= 5) {
//             $scope.victory = true;
//             document.getElementById('winner').play();
//         } else if ($scope.points <= -5) {
//             $scope.defeat = true;
//         }
//     };

// })






