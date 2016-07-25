app.service('animalService', function(){
         var animals = [
            {name:'Lion',
            region: ['Africa', 'North America'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat'],
            image: "performingLion.png",               
            },
            {
            name:'Elephant',
            region: ['Africa', 'Asia'],
            predator: true,
            size: 5,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetatian'],
            image:"Elephants.png",
            },
            {
            name:'Tiger',
            region: ['Asia'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender:['male', 'female'],
            food: ['meat'],
            image:"Tiger.png",
          },
            {
            name:'Ostrich',
            region: ['Africa', 'Asia', 'Europe'],
            predator: false,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetarian'],
            image:"ostrichside.png",
},
            {
            name:'Camel',
            region: ['Africa', 'Asia'],
           predator: false,
            size: 5,
            packAnimal: true,
            gender:['male', 'female'],
            food: ['vegetarian'],
            image:"Camel.png",
           },
              {
            name:'Wolf',
            region: ['North America', 'Europe', 'Arctic'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender:['male', 'female'],
            food: ['meat'],
            image:"Wolf.png",
           },
            {
            name:'Monkey',
            region: ['North America', 'Europe', 'Asia', 'South America'],
            predator: true,
            size: 2,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat', 'vegetarian'],
            image:"Monkeyonstiltz.png",
           },
                 {
            name:'Bear',
            region: ['North America', 'Europe', 'Asia', 'South America'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender: ['male', 'female'],
            food: ['meat', 'vegetarian'],
            image:"bearsonbikes.png",
           },
                       {
            name:'Polar Bear',
            region: ['North America', 'Arctic'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender: ['male', 'female'],
            food: ['meat', 'vegetarian'],
            image:"PolarBearOnBall.png",
           },
                       {
            name:'Rabbit',
            region: ['North America', 'Europe', 'Asia', 'South America', "Petting Zoo", 'Australia'],
            predator: false,
            size: 1,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetarian'],
            image:"rabbit.png",
           },
                       {
            name:'Zebras',
            region: ['North America', 'Africa', 'Asia', 'South America'],
            predator: false,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat', 'vegetarian'],
            image: "Zebras.png",
           },
        ]
         
    this.getAnimals= function(){
             return animals;
    }
    this.getAnimal = function(name){
        name = name.split('-').join(' ').toLowerCase;
        for(var i =0; i<animals.length; i++){
            var currentAnimal = animals[i];
            if(currentAnimal.name.toLowerCase()=== name){
                return currentAnimal;
            }
        }
    }
})