app.service('zooService', function() {

    var environments = [
        {
            name: 'Africa',
            temperature: ["hot"],
            humidity: ["dry"],
            size: 1,
<<<<<<< HEAD
            image:"Africa.png",
            },
            {name:'Arctic',
           temperature: ['cold'],
=======
            image: "img/Africa.png",
        },
        {
            name: 'Arctic',
            temperature: ['cold'],
>>>>>>> c6e24257238bf89d4e779cebb6ce39ddd48ef744
            humidity: ['wet'],
            size: 1,
            image: "img/Arctic.png",
        },

        {
            name: 'Asia',
            temperature: ['hot', 'temperate'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image: "img/Asia.png",
        },

        {
            name: 'Petting Zoo',
            temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image: "img/PettingZoo.png",
        },
        {
            name: 'North America',
            temperature: ['temperate', 'cold'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image: "img/NorthAmerica.png",
        },
        {
            name: 'South America',
            temperature: ['hot'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image: "img/SouthAmerica.png",
        },


        {
            name: 'Australia',
            temperature: ['hot'],
            humidity: ['temperate', 'wet'],
            size: 1,
            image: "img/Australia.png",
        }
    ]
    this.getEnvironments = function() {
        return environments;
    }

    this.getEnvironment = function(name) {
        name = name.split('-').join(' ').toLowerCase();
        for (var i = 0; i < environments.length; i++) {
            var currentEnvironment = environments[i];
            if (currentEnvironment.name.toLowerCase() === name) {
                return currentEnvironment;
            }
        }
    }
})
