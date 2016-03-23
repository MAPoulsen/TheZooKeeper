
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
    
    //  .state('Africa', {
    //     url:'/Africa',
    //     templateUrl: '/assets/config/Africa/Africa.html',
    //     controller: 'AfricaController',
    //     controllerAs: 'afc',
    // })
    // .state('Arctic', {
    //     url:'/Arctic',
    //     templateUrl: '/assets/config/Arctic/Arctic.html',
    //     controller: 'ArcticController',
    //     controllerAs: 'arcc',
    // })
    // .state('Asia', {
    //     url:'/Asia',
    //     templateUrl: '/assets/config/Asia/Asia.html',
    //     controller: 'AsiaController',
    //     controllerAs: 'asc',
    // })
    // .state('Europe', {
    //     url:'/Europe',
    //     templateUrl: '/assets/config/Europe/Europe.html',
    //     controller: 'EuropeController',
    //     controllerAs: 'ec',
    // })
    // .state('NorthAmerica', {
    //     url:'/NorthAmerica',
    //     templateUrl: '/assets/config/NorthAmerica/NorthAmerica.html',
    //     controller: 'NorthAmericaController',
    //     controllerAs: 'nac',
    // })
    // .state('SouthAmerica', {
    //     url:'/SouthAmerica',
    //     templateUrl: '/assets/config/SouthAmerica/SouthAmerica.html',
    //     controller: 'SouthAmericaController',
    //     controllerAs: 'sac',
    // })
    // .state('Australia', {
    //     url:'/Australia',
    //     templateUrl: '/assets/config/Australia/Australia.html',
    //     controller: 'AustraliaController',
    //     controllerAs: 'ausc',
    // })
});