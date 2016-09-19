/*
    Configuration file.
*/

export default
function routing($urlRouterProvider, $locationProvider)
{
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!')
    $urlRouterProvider.otherwise('/')
}

routing.$inject = ['$urlRouterProvider', '$locationProvider']
