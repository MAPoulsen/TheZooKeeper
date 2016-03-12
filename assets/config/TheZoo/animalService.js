app.service('animalService', function(){
  
    
         var animals = [
            {name:'Lion',
            region: ['Africa', 'North America'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat'],
            images:[{
                full:"lion-01-full.jpg",
                thumb:"lion-01-thumb.jpg",
            }]},
            {
            name:'Elephant',
            region: ['Africa', 'Asia'],
            predator: true,
            size: 5,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetation'],
            images:[{
                full:"Elephant-01-full.jpg",
                thumb:"Elephant-01-thumb.jpg",
            }]},
            {
            name:'Tiger',
            region: ['Asia'],
            predator: true,
            size: 4,
            packAnimal: false,
            gender:['male', 'female'],
            food: ['meat'],
            images:[{
                full:"Tiger-01-full.jpg",
                thumb:"Tiger-01-thumb.jpg",
            }]},
            {
            name:'Antelope',
            region: ['Africa', 'Asia', 'Europe'],
            predator: false,
            size: 4,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['vegetable'],
            images:[{
                full:"Antelope-01-full.jpg",
                thumb:"Antelope-01-thumb.jpg",
            }]},
            {
            name:'Camel',
            region: ['Africa', 'Asia'],
           predator: false,
            size: 5,
            packAnimal: false,
            gender:['male', 'female'],
            food: ['vegetable'],
            images:[{
                full:"Anaconda-01-full.jpg",
                thumb:"Anaconda-01-thumb.jpg",
            }]},
              {
            name:'Wolf',
            region: ['North America', 'Europe', 'Arctic'],
            predator: true,
            size: 4,
            packAnimal: true,
            gender:['male', 'female'],
            food: ['meat'],
            images:[{
                full:"Wolf-01-full.jpg",
                thumb:"Wolf-01-thumb.jpg",
            }]},
            {
            name:'Monkey',
            region: ['North America', 'Europe', 'Asia', 'South America'],
            predator: true,
            size: 3,
            packAnimal: true,
            gender: ['male', 'female'],
            food: ['meat', 'vegetable'],
            images:[{
                full:"Monkey-01-full.jpg",
                thumb:"Monkey-01-thumb.jpg",
            }]},
        ]
         })
         
         this.getAnimals= function(){
             return animals;
         }
         this.getAnimals = function(name){
             name=name.split('-').join(' ').toLowerCase;
             for(var i =0; i<animals.length; i++){
                 var currentAnimal = animals[i];
                 if(currentAnimal.name.toLowerCase()=== name){
                     return currentAnimal;
                 }
             }
         }