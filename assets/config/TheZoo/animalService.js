app.service('animalService', function(){
         var animals = [
            {name:'Lion',
            drag: true,
            region: ['Africa', 'North America'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat'],
            image: "img/performingLion.png",               
            },
            {
            name:'Elephant',
            region: ['Africa', 'Asia'],
            predator: true,
            size: 5,
            packAnimal: true,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['vegetatian'],
            image:"Elephants.png",
=======
            food: ['vegetation'],
            image:"img/Elephants.png",

>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
            },
            {
            name:'Tiger',
            region: ['Asia'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender:['male', 'female'],
            food: ['meat'],
            image:"img/Tiger.png",
          },
            {
            name:'Ostrich',
            region: ['Africa', 'Asia', 'Europe'],
            predator: false,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['vegetarian'],
            image:"ostrichside.png",
=======
            food: ['vegetable'],
            image:"img/ostrichside.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
},
            {
            name:'Camel',
            region: ['Africa', 'Asia'],
           predator: false,
            size: 5,
            packAnimal: true,
            gender:['male', 'female'],
<<<<<<< HEAD
            food: ['vegetarian'],
            image:"Camel.png",
=======
            food: ['vegetable'],
            image:"img/Camel.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
              {
            name:'Wolf',
            region: ['North America', 'Europe', 'Arctic'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender:['male', 'female'],
            food: ['meat'],
            image:"img/Wolf.png",
           },
            {
            name:'Monkey',
            region: ['North America', 'Europe', 'Asia', 'South America'],
            predator: true,
            size: 2,
            packAnimal: true,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['meat', 'vegetarian'],
            image:"Monkeyonstiltz.png",
=======
            food: ['meat', 'vegetable'],
            image:"img/Monkeyonstiltz.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
                 {
            name:'Bear',
            region: ['North America', 'Europe', 'Asia', 'South America'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['meat', 'vegetarian'],
            image:"bearsonbikes.png",
=======
            food: ['meat', 'vegetable'],
            image:"img/bearsonbikes.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
                       {
            name:'Polar Bear',
            region: ['North America', 'Arctic'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['meat', 'vegetarian'],
            image:"PolarBearOnBall.png",
=======
            food: ['meat', 'vegetable'],
            image:"img/PolarBearOnBall.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
                       {
            name:'Rabbit',
            region: ['North America', 'Europe', 'Asia', 'South America', "Petting Zoo", 'Australia'],
            predator: false,
            size: 1,
            packAnimal: true,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['vegetarian'],
            image:"rabbit.png",
=======
            food: ['vegetable'],
            image:"img/rabbit.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
                       {
            name:'Zebras',
            region: ['North America', 'Africa', 'Asia', 'South America'],
            predator: false,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
<<<<<<< HEAD
            food: ['meat', 'vegetarian'],
            image: "Zebras.png",
=======
            food: ['vegetable'],
            image: "img/Zebras.png",
           },
                            {
            name:'Kangaroo',
            region: ["Australia"],
            predator: false,
            size: 3,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetable'],
            image: "img/kangaroo.png",
           },
                 { name:'Coyote',
            region: ["North America", "South America", "Africa"],
            predator: true,
            size: 3,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat'],
            image: "img/coyote.png",
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
           },
                    { name:'Giraffe',
            region: ["Africa"],
            predator: false,
            size: 5,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetarian'],
            image: "img/giraffe.png",
           }
        ]
         
    this.getAnimals= function(){
             return animals;
    }
    this.getAnimal = function(name){
        for(var i =0; i<animals.length; i++){
            var currentAnimal = animals[i];
            if(currentAnimal.name === name){
                console.log(currentAnimal);
                return currentAnimal;
            }
            console.log("no match");
        }
    }
})