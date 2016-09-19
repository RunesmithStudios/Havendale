export default
function routing($stateProvider)
{
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/home',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
}

routing.$inject = ['$stateProvider']
