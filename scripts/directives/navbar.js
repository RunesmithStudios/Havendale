export default
function navbar()
{
    return {
        restrict: 'E',
        scope: {
            menu: '='
        },
        templateUrl: 'directives/navbar',
        link: function(scope)
        {
            scope.menu.links = scope.menu.links
                .map((element) => {
                    return {
                        link: element[0],
                        name: element[1]
                    }
                })
        }
    }
}
