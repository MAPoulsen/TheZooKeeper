
app.service('zooService', function(){
    
         var environments = [
            {name:'Africa',
           temperature: ["hot"],
            humidity: ["dry"],
            size: 1,
            images:[{
                full:"Africa-01-full.jpg",
                thumb:"Africa-01-thumb.jpg"
            }]},
            
            {name:'Asia',
           temperature: ['hot', 'temperate'],
            humidity: ['temperate', 'wet'],
            size: 1,
            images:[{
                full:"/assets/img/Asia-01-full.jpg",
                thumb:"Asia-01-thumb.jpg"
            }]},
            
             {name:'Europe',
           temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1,
            images:[{
                full:"Europe-01-full.jpg",
                thumb:"Europe-01-thumb.jpg",
            }]},
                {name:'North America',
           temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1, 
            images:[{
                full:"NorthAmerica-01-full.jpg",
                thumb:"NorthAmerica-01-thumb.jpg"
            }]},
                {name:'South America',
           temperature: ['hot'],
            humidity: ['temperate', 'wet'],
            size: 1,
            images:[{
                full:"SouthAmerica-01-full.jpg",
                thumb:"SouthAmerica-01-thumb.jpg"
            }]}
         ]
         
         this.getEnvironments= function(){
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
});