
app.service('zooService', function(){
    
         var environments = [
            {name:'Africa',
           temperature: ["hot"],
            humidity: ["dry"],
            size: 1,
            image:"Africa.png",
            },
                            {name:'Arctic',
           temperature: ['cold'],
            humidity: ['wet'],
            size: 1,
            image:"Arctic.png",
},
            
            {name:'Asia',
           temperature: ['hot', 'temperate'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image:"/assets/img/Asia-01-full.png",
            },
            
             {name:'Petting Zoo',
           temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image:"PettingZoo.png",
            },
                {name:'North America',
           temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1, 
            image:"NorthAmerica-01-full.png",
            },
                {name:'South America',
           temperature: ['hot'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image:"SouthAmerica-01-full.png",
}
         ]
         this.getEnvironments = function(){
             return environments;
         }
         
         this.getEnvironment = function(name){
             name = name.split('-').join(' ').toLowerCase();
             for (var i = 0; i < environments.length; i++){
                 var currentEnvironment = environments[i];
                 if(currentEnvironment.name.toLowerCase()===name){
                     return currentEnvironment;
                 }
             }
         }
})