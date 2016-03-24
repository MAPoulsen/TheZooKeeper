
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('theZoo', {
        url:'/',
        templateUrl: '/theZoo.html',
        controller: 'ZooController',
        controllerAs: 'zc'
    })
    
    .state('region', {
        url:'/region/:regionName',
        templateUrl: '/assets/config/region/region.html',
        controller: 'RegionController',
        controllerAs: 'rc'
    })
    
    
    .state('animal', {
        url:'/animal/:animalName',
        templateUrl: '/assets/config/Animal/animal.html',
        controller: 'AnimalController',
        controllerAs: 'ac'
    })
    
    
});