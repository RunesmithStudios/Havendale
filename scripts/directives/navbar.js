export default
function navbar($document, $window)
{
    return {
        restrict: 'E',
        scope: {
            menu: '='
        },
        templateUrl: 'directives/navbar',
        link: function(scope, element, attrs)
        {
            scope.menu.links = scope.menu.links
                .map((element) => {
                    return {
                        link: element[0],
                        name: element[1]
                    }
                })

            element.addClass('grid grid-fluid')

            $document.on('scroll', () => {
                console.log($window.pageYOffset)
                if($window.pageYOffset >= 51)
                {
                    if(! element.hasClass('affix')) element.addClass('affix')
                } else {
                    if(element.hasClass('affix')) element.removeClass('affix')
                }
            })
        }
    }
}

navbar.$inject = ['$document', '$window']
